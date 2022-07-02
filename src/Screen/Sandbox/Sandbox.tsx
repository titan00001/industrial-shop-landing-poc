import * as React from "react";
import Typography from "./Typography";
import MapSandbox from "./Map";
import ImageSandbox from "./Image";

export interface ISandboxProps {}

export const Sandbox: React.FC<ISandboxProps> = (props) => {
  return (
    <div>
      <div>
        Typography
        <Typography />
      </div>
      {/* <div>
        Map
        <MapSandbox />
      </div> */}
      <div>
        Image
        <ImageSandbox />
      </div>
    </div>
  );
};
