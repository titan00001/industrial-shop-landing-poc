import clsx from "clsx";
import * as React from "react";

interface ILinkProps {
  externalUrl?: string;
  internalUrl?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg" | "full-width";
  classes?: string;
  children: React.ReactNode;
}

const Link: React.FunctionComponent<ILinkProps> = (props) => {
  const { variant, size, externalUrl, internalUrl, classes, children } = props;
  const cls = clsx(
    "btn",
    variant ? `btn--${variant}` : "",
    size ? `btn--${size}` : "",
    classes
  );
  return (
    <a href="#" className={cls}>
      {children}
    </a>
  );
};

export default Link;
