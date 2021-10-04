import React from "react";

export function SlotBox({ label, value }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-rich-black-lightest text-4xl font-semibold">
        {value}
      </div>
      <div className="flex flex-row md:text-rich-black-lighter text-rich-black-lightest text-sm md:text-base">
        {label}
      </div>
    </div>
  );
}
