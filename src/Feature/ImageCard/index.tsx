import * as React from "react";
import Image from "../../Component/Image";
import "./imageCard.style.scss";

interface IImageCardProps {
  imgScr: string;
  children: React.ReactNode;
}

const ImageCard: React.FunctionComponent<IImageCardProps> = (props) => {
  const { imgScr, children } = props;
  return (
    <div className="imageCard">
      <Image image={imgScr} width={360} aspectRatio={16 / 9} />
      <div className="">{children}</div>
    </div>
  );
};

export default ImageCard;
