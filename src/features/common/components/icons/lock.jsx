import React from "react";

export function Lock(props) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`stroke-current ${props.className}`}
    >
      <path
        d="M19.5 11H5.5C4.39543 11 3.5 11.8954 3.5 13V20C3.5 21.1046 4.39543 22 5.5 22H19.5C20.6046 22 21.5 21.1046 21.5 20V13C21.5 11.8954 20.6046 11 19.5 11Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 11V7C7.5 5.67392 8.02678 4.40215 8.96447 3.46447C9.90215 2.52678 11.1739 2 12.5 2C13.8261 2 15.0979 2.52678 16.0355 3.46447C16.9732 4.40215 17.5 5.67392 17.5 7V11"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
