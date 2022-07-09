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
        classes={`${imageOnRight ? "SideBySide--reverse" : "SideBySide"}`}
      >
        <Image image={imageSrc} height={400} aspectRatio={1} />
        <div className="textBox default-padding">{children}</div>
      </SectionWrapper>
    </>
  );
};

export default SideBySide;
