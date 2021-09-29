import React from "react";

import NavbarDesktop from "./navbar-desktop";
import NavbarMobile from "./navbar-mobile";

import navBarLinks from "../../content/nav-bar-links.json";

export default function Navbar() {
  return (
    <>
      <NavbarMobile navItems={navBarLinks} />
      <NavbarDesktop navItems={navBarLinks} />
    </>
  );
}
