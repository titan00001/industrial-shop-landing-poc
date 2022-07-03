import Image from "Component/Image";
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
      <div
        className={`${
          imageOnRight ? "SideBySide--reverse" : "SideBySide"
        } container `}
      >
        <Image image={imageSrc} height={400} aspectRatio={1} />
        <div className="textBox">{children}</div>
      </div>
    </>
  );
};

export default SideBySide;
