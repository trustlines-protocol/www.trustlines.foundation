import React from "react";

export function SlotBox({ label, value }) {
  return (
    <div className="flex flex-col items-center mr-6">
      <div className="text-rich-black-lightest text-4xl font-semibold">
        {value}
      </div>
      <div className="text-rich-black-lighter">{label}</div>
    </div>
  );
}
