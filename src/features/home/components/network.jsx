import React from "react";

import { ArrowRight } from "../../common/components/icons/arrow-right";

import world from "../images/world.svg";
import worldHovered from "../images/world-hovered.svg";

export function HomeNetwork() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <section className="md:py-44 py-20">
      <div className="mx-4">
        <a
          className={`
          max-w-3xl mx-auto flex flex-row justify-end
          bg-gradient-to-b from-coral-red to-neon-pink
          rounded-lg overflow-hidden
          hover:from-rich-black hover:to-rich-black
        `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          href="/"
        >
          <img src={isHovered ? worldHovered : world} alt="world icon" />
          <div className="absolute max-w-3xl mx-auto text-off-white pt-20 px-10 md:px-28">
            <h1 className="md:text-4xl text-3xl font-semibold leading-tight mb-8">
              The Trustlines Network
            </h1>
            <p className="md:text-2xl text-xl mb-8">
              The Foundation is part of the Trustlines Network Ecosystem. Find
              out more by visiting the Trustlines Network website.
            </p>
            <ArrowRight className="fill-current" />
          </div>
        </a>
      </div>
    </section>
  );
}
