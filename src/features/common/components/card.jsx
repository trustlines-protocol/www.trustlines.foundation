import React from "react";

export const Card = props => {
  return (
    <div
      className={`bg-grey-lighter rounded-3xl flex flex-row justify-center items-center ${props.className}`}
    >
      {props.children}
    </div>
  );
};
