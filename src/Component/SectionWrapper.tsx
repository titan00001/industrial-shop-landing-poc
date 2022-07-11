import clsx from "clsx";
import * as React from "react";
import "./sectionWrapper.style.scss";

interface ISectionWrapperProps {
  classes?: string;
  children: React.ReactNode;
  childClasses?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  hasImageBlur?: boolean;
  hasContainer?: boolean;
}

const SectionWrapper: React.FunctionComponent<ISectionWrapperProps> = (
  props
) => {
  const {
    classes,
    children,
    childClasses,
    backgroundColor = "transparent",
    backgroundImage,
    hasImageBlur = false,
    hasContainer = false,
  } = props;
  const cls = clsx(classes, "sectionBG");
  const childCls = clsx(
    childClasses,
    hasContainer ? "container" : "",
    "sectionChild"
  );
  return (
    <section style={{ backgroundColor }} className={cls}>
      {backgroundImage && (
        <>
          <img src={backgroundImage} className="sectionBgImg" />
          {hasImageBlur && <div className={"imageBlur"}> </div>}
        </>
      )}
      <div className={childCls}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
