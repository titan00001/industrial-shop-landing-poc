import * as React from "react";
import Image from "../../Component/Image";
import "./imageCard.style.scss";

interface IImageCardProps {
  imgScr: string;
  children: React.ReactNode;
  width?: number;
  aspectRatio?: string | number;
  nofallback?: boolean;
}

const ImageCard: React.FunctionComponent<IImageCardProps> = (props) => {
  const {
    imgScr,
    children,
    width = 360,
    aspectRatio = 16 / 9,
    nofallback = false,
  } = props;
  return (
    <div style={{ width }} className="imageCard">
      <Image
        image={imgScr}
        width={width}
        aspectRatio={aspectRatio}
        nofallback={nofallback}
      />
      <div className="spacer-hr" />
      <div className="text-box margin-top--sm margin-bottom--sm">
        {children}
      </div>
    </div>
  );
};

export default ImageCard;
