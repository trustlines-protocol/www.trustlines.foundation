import React from "react";
import { Button } from "../../../common/components/button";

export default function ActionButton(props) {
  return (
    <Button
      {...props}
      isDark
      className={`bg-dark-green-lighter ${props.className}`}
    >
      {props.label}
    </Button>
  );
}
