import React from "react";

export function LinkButton(props) {
  const colorClassNames = props.isDark
    ? "bg-rich-black-lighter text-off-white hover:bg-off-white hover:text-rich-black"
    : "bg-grey-lighter text-rich-black hover:bg-rich-black hover:text-white";

  return (
    <a
      href={props.href}
      className={`px-8 py-4 rounded-full text-sm ${colorClassNames} ${props.className}`}
      target="_blank"
      rel="noreferrer noopener"
    >
      {props.label}
    </a>
  );
}
