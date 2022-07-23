import Image from "Component/Image";
import SectionWrapper from "Component/SectionWrapper";
import * as React from "react";
import "./sideBySide.style.scss";

interface ISideBySideProps {
  children: React.ReactNode;
  imageSrc?: string;
  imageOnRight?: boolean;
  hasContainer?: boolean;
  nofallback?: boolean;
}

const SideBySide: React.FunctionComponent<ISideBySideProps> = (props) => {
  const {
    children,
    imageSrc,
    imageOnRight,
    hasContainer,
    nofallback = false,
  } = props;

  return (
    <>
      <SectionWrapper
        hasContainer={hasContainer}
        childClasses={`${imageOnRight ? "SideBySide--reverse" : "SideBySide"}`}
      >
        {imageSrc ? (
          <Image
            image={imageSrc}
            height={"400px"}
            aspectRatio={1}
            nofallback={nofallback}
          />
        ) : (
          <div
            style={{ height: 400, width: 400, backgroundColor: "transparent" }}
          ></div>
        )}
        <div className="textBox default-padding">{children}</div>
      </SectionWrapper>
    </>
  );
};

export default SideBySide;
