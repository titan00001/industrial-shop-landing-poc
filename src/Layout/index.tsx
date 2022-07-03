import clsx from "clsx";
import * as React from "react";

interface ILayoutProps {
  children?: React.ReactNode;
  variant:
    | "equal-width-box"
    | "varying-width-boxes"
    | "varying-height-width-box"
    | "overlapping-box";
}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  const { variant, children } = props;
  const cls = clsx(
    variant === "equal-width-box" ? "grid-gallery" : "",
    variant === "varying-width-boxes" ? "flex-grid" : "",
    variant === "varying-height-width-box" ? "container" : "",
    variant === "overlapping-box" ? "overlapping-container" : ""
  );
  return (
    <>
      <div className={cls}>{children}</div>
    </>
  );
};

export default Layout;
