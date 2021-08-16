import React from "react";
import { Link } from "gatsby";

import { Logo } from "./icons/logo";
import navBarLinks from "../content/nav-bar-links.json";

export function NavBar() {
  return (
    <nav className="container mx-auto">
      <div className="flex flex-row items-center justify-between my-12">
        <Logo />
        <div className="flex flex-row">
          {navBarLinks.map(item => (
            <Link
              className="text-sm text-rich-black-lighter mr-8"
              to={item.to}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
