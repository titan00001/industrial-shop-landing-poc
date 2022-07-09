import clsx from "clsx";
import * as React from "react";

interface ISectionWrapperProps {
  classes?: string;
  children: React.ReactNode;
  childClasses?: string;
  backgroundColor?: string;
}

const SectionWrapper: React.FunctionComponent<ISectionWrapperProps> = (
  props
) => {
  const { classes, children, childClasses, backgroundColor = "" } = props;
  const cls = clsx(classes);
  const childCls = clsx(childClasses, "container");
  return (
    <section style={{ backgroundColor }} className={cls}>
      <div className={childCls}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
