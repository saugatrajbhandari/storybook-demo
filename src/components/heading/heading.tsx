import React from "react";
import cn from "classnames";

export type HeadingProps = {
  label: "h1" | "h2" | "h3" | "h4" | "h5";
  size: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  align: "left" | "center" | "right";
  children: React.ReactNode;
};

function Heading(props: HeadingProps) {
  const { label, size = "base", align = "left", children } = props;

  const HeadingTag = label;

  const headingClassName = cn(
    "font-bold",
    {
      "text-4xl": size === "4xl",
      "text-3xl": size === "3xl",
      "text-2xl": size === "2xl",
      "text-xl": size === "xl",
      "text-lg": size === "lg",
      "text-sm": size === "sm",
      "text-base": size === "base",
    },
    {
      "text-center": align === "center",
      "text-left": align === "left",
      "text-right": align === "right",
    }
  );

  return <HeadingTag className={headingClassName}>{children}</HeadingTag>;
}

export default Heading;
