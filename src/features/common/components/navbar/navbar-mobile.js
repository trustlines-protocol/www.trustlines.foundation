import React, { useState } from "react";
import { Link } from "gatsby";

import NavItemMobile from "./nav-item-mobile";

import { SocialLinks } from "../social-links";
import { Logo } from "../icons/logo";
import { Close } from "../icons/close";
import { BurgerMenu } from "../icons/burger-menu";

export default function NavbarMobile({ navItems = [] }) {
  const [isFullScreenNavOpen, setIsFullScreenNavOpen] = useState(false);

  return isFullScreenNavOpen ? (
    <div className="fixed top-0 w-full h-full z-50 p-4 bg-white overflow-y-scroll">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div>
            <Link to="/" aria-label="Link to home page">
              <Logo />
            </Link>
          </div>
          <div>
            <button
              onClick={() => setIsFullScreenNavOpen(false)}
              aria-label="Menu close button"
            >
              <Close />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4 pt-8">
          {navItems.map((navItem, i) => (
            <div
              key={`${navItem.label}-i`}
              onClick={() => setIsFullScreenNavOpen(false)}
            >
              <NavItemMobile {...navItem} />
            </div>
          ))}
          <div className="flex-1 bg-grey-lighter rounded-full w-1/2 py-4 px-8 ">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="sticky top-0 z-50 w-full bg-white p-4 flex flex-row justify-between md:hidden">
      <Link to="/" aria-label="Link to home page">
        <Logo />
      </Link>
      <button
        onClick={() => setIsFullScreenNavOpen(true)}
        aria-label="Menu open button"
      >
        <BurgerMenu />
      </button>
    </div>
  );
}
