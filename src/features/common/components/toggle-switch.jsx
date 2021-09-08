import React from "react";

export default function ToggleSwitch(props) {
  return (
    <div>
      <div class="relative inline-block w-14 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name={props.name}
          id={props.id}
          className="toggle-checkbox absolute block w-8 h-8 rounded-full bg-white border-4 border-rich-black-lightest appearance-none cursor-pointer"
        />
        <label
          for={props.name}
          className={`toggle-label block overflow-hidden h-8 rounded-full bg-rich-black-lightest cursor-pointer ${props.className}`}
        ></label>
      </div>
      <label for={props.name} class="text-sm text-rich-black-lightest">
        {props.label}
      </label>
    </div>
  );
}
