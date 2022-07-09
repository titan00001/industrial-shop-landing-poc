import clsx from "clsx";
import * as React from "react";

interface IButtonProps {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  classes?: string;
  size?: "sm" | "md" | "lg" | "full-width";
  action?: () => void | Promise<void>;
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  const {
    primary,
    secondary,
    tertiary,
    disabled,
    children,
    classes,
    size,
    action,
  } = props;
  const cls = clsx(
    classes,
    "btn",
    primary ? "btn--primary" : "",
    secondary ? "btn--secondary" : "",
    tertiary ? "" : "",
    disabled ? "btn--disabled" : "",
    size ? `btn--${size}` : ""
  );
  return (
    <button onClick={action} className={cls}>
      {children}
    </button>
  );
};

export default Button;
