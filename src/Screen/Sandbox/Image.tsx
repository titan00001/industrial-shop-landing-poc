import * as React from "react";
import Image from "../../Component/Image";

interface IImageSandboxProps {}

const ImageSandbox: React.FunctionComponent<IImageSandboxProps> = () => {
  return (
    <>
      <Image
        image="https://images.unsplash.com/photo-1585201731775-0597e1be4bfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJpbGwlMjBiaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        height="200px"
        width="200px"
        aspectRatio={"9/16"}
        crop
      />
    </>
  );
};

export default ImageSandbox;
