import * as React from "react";
import { Icon } from "@iconify/react";

interface ISvgProps {
  name: "menu";
  width?: string;
  height?: string;
}

const Svg: React.FunctionComponent<ISvgProps> = (props) => {
  const { name, height = 24, width = 24 } = props;
  if (name === "menu")
    return (
      <Icon
        icon="material-symbols:menu-rounded"
        height={height}
        width={width}
      />
    );
  return <>No SVG</>;
};

export default Svg;
