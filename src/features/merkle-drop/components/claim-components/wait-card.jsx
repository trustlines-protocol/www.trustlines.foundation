import React from "react";

function WaitCard({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <h1 className="font-semibold">{title}</h1>
      <div className="spinner-wrapper py-4">
        <div className="spinner" />
      </div>
      <div className="flex flex-col text-xs items-center">{children}</div>
    </div>
  );
}

export default WaitCard;
