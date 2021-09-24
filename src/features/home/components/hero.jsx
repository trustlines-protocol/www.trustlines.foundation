import React from "react";

import { LinkButton } from "../../common/components/link-button";

import worldMap from "../images/world-map.svg";

export function HomeHero() {
  return (
    <section className="container mx-auto px-4 mb-32">
      <div className="grid grid-col-1">
        <div className="hero-header items-center">
          <div className="relative container mx-auto flex flex-row justify-end">
            <div className="absolute top-20 left-0 px-4">
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                Financial
                <br /> Inclusion for all.
                <br /> Leveraging trust.
              </h1>
            </div>
            <div className="py-24 md:py-0 opacity-70 -z-1">
              <img src={worldMap} alt="world map" />
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <LinkButton href="/" label="Read about the Trustlines Foundation →" />
        </div>
      </div>
    </section>
  );
}
