import React from "react";

import NavBar from "./navbar";
import { Footer } from "./footer";

export function Layout(props) {
  return (
    <div className="bg-gradient-to-b from-white to-grey-lighter">
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
}
