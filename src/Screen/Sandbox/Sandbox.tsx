import * as React from "react";
import Typography from "./Typography";
import MapSandbox from "./Map";
import ImageSandbox from "./Image";
import ButtonTest from "./ButtonTest";
import LayoutTest from "./Layout";

export interface ISandboxProps {}

export const Sandbox: React.FC<ISandboxProps> = (props) => {
  return (
    <div>
      <div>
        Typography
        <Typography />
      </div>
      <div>
        Map
        <MapSandbox />
      </div>
      <div>
        Image
        <ImageSandbox />
      </div>
      <div>
        Button
        <ButtonTest />
      </div>
      <div>
        Layout
        <LayoutTest />
      </div>
    </div>
  );
};
