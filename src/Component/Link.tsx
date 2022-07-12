import clsx from "clsx";
import * as React from "react";

interface ILinkProps {
  externalUrl?: string;
  internalUrl?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg" | "full-width";
  classes?: string;
  children: React.ReactNode;
  target?: "_blank";
}

const Link: React.FunctionComponent<ILinkProps> = (props) => {
  const { variant, size, externalUrl, internalUrl, classes, children, target } =
    props;
  const cls = clsx(
    "btn",
    variant ? `btn--${variant}` : "",
    size ? `btn--${size}` : "",
    classes
  );
  if (externalUrl) {
    return (
      <a target={target} href={externalUrl} className={cls}>
        {children}
      </a>
    );
  } else if (internalUrl) {
    return (
      <a href={internalUrl} className={cls}>
        {children}
      </a>
    );
  } else {
    return (
      <a href="#" className={cls}>
        {children}
      </a>
    );
  }
};

export default Link;
