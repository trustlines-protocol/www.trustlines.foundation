import React from "react";

import { LinkButton } from "../../common/components/link-button";

const ROLES = [
  "Support research and governance of the Protocol",
  "Organise and promote open source development",
  "Maintain the respective Github repositories",
  "Deploy the required core components",
];

export function HomeRole() {
  return (
    <section className="container mx-auto mb-44 flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-semibold text-grey-lighter">Our Role</h1>
      <div className="flex flex-row justify-between py-16">
        {ROLES.map((role, i) => (
          <RoleItem text={role} key={`role-${i}`} />
        ))}
      </div>
      <div>
        <LinkButton href="/" label="Read about the Trustlines Foundation →" />
      </div>
    </section>
  );
}

function RoleItem(props) {
  return (
    <div className="flex flex-col items-center max-w-xs px-4">
      <svg
        width="65"
        height="64"
        viewBox="0 0 65 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" width="64" height="64" rx="32" fill="#D0FBE9" />
        <path
          d="M42 31.08V32C41.9988 34.1564 41.3005 36.2547 40.0093 37.9818C38.7182 39.709 36.9033 40.9725 34.8354 41.5839C32.7674 42.1953 30.5573 42.1219 28.5345 41.3746C26.5117 40.6273 24.7847 39.2461 23.611 37.4371C22.4373 35.628 21.8798 33.4881 22.0217 31.3363C22.1636 29.1846 22.9972 27.1363 24.3983 25.4971C25.7994 23.8578 27.6928 22.7154 29.7962 22.2401C31.8996 21.7649 34.1003 21.9823 36.07 22.86"
          stroke="#0EC390"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M42 24L32 34.01L29 31.01"
          stroke="#0EC390"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="text-sm text-rich-black text-center mt-4">{props.text}</p>
    </div>
  );
}
