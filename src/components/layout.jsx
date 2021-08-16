import React from "react";

import { NavBar } from "./nav-bar";
import { Footer } from "./footer";

export function Layout(props) {
  return (
    <div>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
}
