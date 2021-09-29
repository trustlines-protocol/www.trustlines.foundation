import React from "react";
import { Link } from "gatsby";

export default function NavItemDesktop({ to, label, subNavItems = [] }) {
  return (
    <div className="cursor-pointer inline-block">
      <div className="flex flex-col justify-center">
        <Link
          className="text-sm whitespace-nowrap text-rich-black-lighter mr-8 cursor-pointer hover:text-majorelle-blue"
          activeClassName="text-majorelle-blue"
          to={to}
          key={label}
        >
          {label}
        </Link>
      </div>
    </div>
  );
}
