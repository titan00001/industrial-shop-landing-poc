import Image from "Component/Image";
import SectionWrapper from "Component/SectionWrapper";
import * as React from "react";
import "./sideBySideOverlap.style.scss";

interface ISideBySideOverlapProps {
  children: React.ReactNode;
  imageSrc: string;
  imageOnRight?: boolean;
  overlapIn12Column: number;
}

const SideBySideOverlap: React.FunctionComponent<ISideBySideOverlapProps> = (
  props
) => {
  const { children, imageSrc, imageOnRight, overlapIn12Column = 1 } = props;

  if (!imageOnRight)
    return (
      <>
        <SectionWrapper classes={`sideByside--overlap`}>
          <Image image={imageSrc} height={400} aspectRatio={1} />
          <div className="textBox">{children}</div>
        </SectionWrapper>
      </>
    );

  return (
    <>
      <div className={`container sideByside--overlap`}>
        <div className="textBox">{children}</div>
        <Image image={imageSrc} height={400} aspectRatio={1} />
      </div>
    </>
  );
};

export default SideBySideOverlap;
