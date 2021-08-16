import React from "react";

import { LinkButton } from "../link-button";

import worldMap from "../../images/world-map.svg";

export function HomeHero() {
  return (
    <section className="container mx-auto px-4 mb-32">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-6xl font-semibold leading-tight">
          Financial
          <br className="lg:hidden" /> Inclusion for all.
          <br /> Leveraging trust.
        </h1>
        <img src={worldMap} alt="world map" />
      </div>
      <div className="flex flex-row">
        <LinkButton href="/" label="Read about the Trustlines Foundation →" />
      </div>
    </section>
  );
}
