import * as React from "react";
import "./Image.style.scss";

interface IImageProps {
  classes?: string;
  image?: string;
  fallback?: string;
  aspectRatio?: number | string;
  height?: number | string;
  width?: number | string;
  crop?: boolean;
  hasBackdrop?: boolean;
  children?: React.ReactNode;
}

const fallbackUrl = "https://pic.onlinewebfonts.com/svg/img_148071.png";

const getImage = (image?: string, fallback?: string) => {
  let url = image ?? fallback;
  let alt = "image";

  return { url, alt };
};

const Image: React.FunctionComponent<IImageProps> = (props) => {
  const {
    classes = "",
    image,
    aspectRatio,
    height,
    width,
    crop = false,
    children,
    fallback,
    hasBackdrop = false,
  } = props;

  const [imageContent, setImageContent] = React.useState(
    getImage(image, fallback)
  );

  const aspectRatioNum =
    typeof aspectRatio === "string"
      ? parseInt(aspectRatio.split("/")[0], 10) /
        parseInt(aspectRatio.split("/")[1], 10)
      : aspectRatio;

  console.log(imageContent.url, image);

  if (imageContent.url)
    return (
      <div
        className={`imageContainer ${classes} ${
          hasBackdrop ? "bgOpaque" : ""
        } ${
          aspectRatio && aspectRatioNum
            ? aspectRatioNum <= 1
              ? "fitHeight"
              : ""
            : ""
        } `}
        style={
          aspectRatio
            ? { aspectRatio: `${aspectRatio}`, height, width }
            : { height, width }
        }
      >
        <img
          className={"image"}
          src={imageContent.url}
          alt={imageContent.alt}
          style={{
            objectFit: aspectRatio ? (crop ? "cover" : "unset") : "contain",
            objectPosition: "left",
          }}
          onError={() => {
            setImageContent(getImage(fallback, fallbackUrl));
          }}
        />

        <div className="imageChild">{children}</div>
      </div>
    );
  return null;
};

export default Image;
