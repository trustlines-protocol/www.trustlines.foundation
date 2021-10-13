import React from "react";
import { Link } from "gatsby";

import NavItem from "./nav-item-desktop";
import { Logo } from "../icons/logo";

export default function NavbarDesktop({ navItems = [] }) {
  return (
    <div className="sticky top-0 w-full bg-white z-50 hidden md:block">
      <div className="flex h-24 pb-4 flex-col justify-end mx-auto container">
        <div className="flex flex-row justify-between items-center px-2">
          <Link to="/">
            <Logo />
          </Link>
          <div className="flex flex-row space-x-6 items-center">
            {navItems.map(item => (
              <NavItem key={item.label} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
