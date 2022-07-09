import Image from "Component/Image";
import SectionWrapper from "Component/SectionWrapper";
import * as React from "react";
import "./sideBySide.style.scss";

interface ISideBySideProps {
  children: React.ReactNode;
  imageSrc: string;
  imageOnRight?: boolean;
}

const SideBySide: React.FunctionComponent<ISideBySideProps> = (props) => {
  const { children, imageSrc, imageOnRight } = props;

  return (
    <>
      <SectionWrapper
        childClasses={`${imageOnRight ? "SideBySide--reverse" : "SideBySide"}`}
      >
        <Image image={imageSrc} height={"400px"} aspectRatio={1} />
        <div className="textBox default-padding">{children}</div>
      </SectionWrapper>
    </>
  );
};

export default SideBySide;
