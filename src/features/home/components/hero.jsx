import React from "react";

import { LinkButton } from "../../common/components/link-button";

import worldMap from "../images/world-map.svg";

export function HomeHero() {
  return (
    <section className="container mx-auto px-4 mb-12">
      <div className="hero-header items-center">
        <h1 className="text-6xl font-semibold leading-tight">
          Bringing<br />
          <br className="lg:hidden" /> People Powered Money
          <br /> to the world
        </h1>
        <img src={worldMap} alt="world map" />
      </div>
    </section>
  );
}
