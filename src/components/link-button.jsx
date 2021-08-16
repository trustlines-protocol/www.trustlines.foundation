import React from "react";

export function LinkButton(props) {
  return (
    <a
      href={props.href}
      className="px-8 py-4 bg-grey-lighter text-rich-black rounded-full text-sm hover:bg-rich-black hover:text-white"
      target="_blank"
      rel="noreferrer noopener"
    >
      {props.label}
    </a>
  );
}
