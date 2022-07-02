import clsx from "clsx";
import * as React from "react";

interface IButtonProps {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  disabled?: boolean;
  text: string;
  classes?: string;
  size?: "sm" | "md" | "lg" | "full-width";
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  const { primary, secondary, tertiary, disabled, text, classes, size } = props;
  const cls = clsx(
    classes,
    "btn",
    primary ? "btn--primary" : "",
    secondary ? "btn--secondary" : "",
    tertiary ? "" : "",
    disabled ? "btn--disabled" : "",
    size ? `btn--${size}` : ""
  );
  return <button className={cls}>{text}</button>;
};

export default Button;
