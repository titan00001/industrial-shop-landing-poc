import clsx from "clsx";
import * as React from "react";

interface ILinkProps {
  text: string;
  externalUrl?: string;
  internalUrl?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg" | "full-width";
  classes?: string;
}

const Link: React.FunctionComponent<ILinkProps> = (props) => {
  const { text, variant, size, externalUrl, internalUrl, classes } = props;
  const cls = clsx(
    "btn",
    variant ? `btn--${variant}` : "",
    size ? `btn--${size}` : "",
    classes
  );
  return (
    <a href="#" className={cls}>
      {text}
    </a>
  );
};

export default Link;
