import React from "react";
import clsx from "clsx";

export interface ITypoProps {
  children: React.ReactNode;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  caption?: boolean;
  classes?: string;
  bold?: boolean;
  inline?: boolean;
  handleTextOverflow?: boolean;
}

const Typo: React.FunctionComponent<ITypoProps> = (props) => {
  const { children } = props;
  const {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    caption,
    classes,
    bold,
    inline,
    handleTextOverflow,
  } = props;

  const cls = clsx(
    "typo",
    bold ? "bold" : "",
    inline ? "inline" : "",
    handleTextOverflow ? "truncate" : "",
    classes
  );

  if (h1) return <h1 className={cls}>{children}</h1>;
  if (h2) return <h2 className={cls}>{children}</h2>;
  if (h3) return <h3 className={cls}>{children}</h3>;
  if (h4) return <h4 className={cls}>{children}</h4>;
  if (h5) return <h5 className={cls}>{children}</h5>;
  if (h6) return <h6 className={cls}>{children}</h6>;
  return <p className={cls}>{children}</p>;
};

export default Typo;
