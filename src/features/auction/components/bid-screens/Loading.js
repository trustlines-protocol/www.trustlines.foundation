import React from "react";

function Loading({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center py-4 text-off-white">
      <h1 className="font-semibold">{title}</h1>
      <div className="spinner-wrapper py-4">
        <div className="spinner-dark" />
      </div>
      <div className="flex flex-col text-xs items-center">{children}</div>
    </div>
  );
}

export default Loading;
