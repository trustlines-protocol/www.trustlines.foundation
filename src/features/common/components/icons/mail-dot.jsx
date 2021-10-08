import React from "react";

export function MailDot(props) {
  return (
    <svg
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      stroke="#6C6C73"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 4H22C23.1 4 24 4.9 24 6V18C24 19.1 23.1 20 22 20H6C4.9 20 4 19.1 4 18V6C4 4.9 4.9 4 6 4Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24 6L14 13L4 6"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="4" cy="4" r="4" fill="#7657ED" className="animate-pulse"/>
    </svg>
  );
}
