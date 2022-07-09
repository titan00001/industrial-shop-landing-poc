import clsx from "clsx";
import * as React from "react";

interface ISectionWrapperProps {
  classes: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FunctionComponent<ISectionWrapperProps> = (
  props
) => {
  const { classes, children } = props;
  const cls = clsx(classes, "container");
  return <section className={cls}>{children}</section>;
};

export default SectionWrapper;
