import * as React from "react";
import Image from "../../Component/Image";
import "./imageCard.style.scss";

interface IImageCardProps {
  imgScr: string;
  children: React.ReactNode;
  width?: number;
  aspectRatio?: string | number;
}

const ImageCard: React.FunctionComponent<IImageCardProps> = (props) => {
  const { imgScr, children, width = 360, aspectRatio = 16 / 9 } = props;
  return (
    <div className="imageCard">
      <Image image={imgScr} width={width} aspectRatio={aspectRatio} />
      <div className="default-padding">{children}</div>
    </div>
  );
};

export default ImageCard;
