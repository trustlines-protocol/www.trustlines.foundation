import React from "react";

import worldMap from "../images/world-map.svg";

export function HomeHero() {
  return (
    <section className="md:container mx-auto px-4 mb-12 h-80 md:h-1/2">
      <div className="hero-header items-center">
        <div className="relative container mx-auto flex flex-row justify-end">
          <div className="absolute md:top-28 top-16 left-0 md:px-8 px-0 z-20">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Bringing
              <br /> People Powered Money
              <br /> to the world
            </h1>
          </div>
          <div className="py-8 md:py-0 z-10 sm:opacity-100 opacity-60 sm:z-10">
            <img src={worldMap} alt="world map" />
          </div>
        </div>
      </div>
    </section>
  );
}
