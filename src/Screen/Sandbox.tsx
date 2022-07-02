import * as React from "react";
import Typography from "./Typography";

export interface ISandboxProps {}

export const Sandbox: React.FC<ISandboxProps> = (props) => {
  return (
    <div>
      Typography
      <Typography />
    </div>
  );
};
