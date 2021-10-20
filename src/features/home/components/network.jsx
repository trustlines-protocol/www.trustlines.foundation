import React from "react";

import { ArrowRight } from "../../common/components/icons/arrow-right";
import { Group } from "../../common/components/icons/group";
import { ExternalLinks } from "../../../constants";

import world from "../images/world.svg";
import worldHovered from "../images/world-hovered.svg";
import { HeartStroked } from "../../common/components/icons/heart-stroked";

export function HomeNetwork() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <section className="md:py-6 py-6">
      <div className="max-w-7xl mx-auto mb-4 flex flex-col md:px-28">
        <HeartStroked />
        <h1 className="md:text-4xl text-3xl font-semibold leading-tight mb-8 px-0 items-left md:mx-0 mx-4">
          The Trustlines Network
        </h1>
        <p className="md:mx-0 mx-4 md:text-base text-base mb-8 flex-col">
          The original idea behind the Trustlines Network came up as the current
          financial system is unable or unwilling to serve about 1.7 billion
          unbanked and underbanked people.
          <br />
          <br />
          The Trustlines Network is a community-driven project that empowers
          people to create their own money and access digital payments. We call
          it People Powered Money.
          <br />
          <br />
          To enable People Powered Money, we are building a universally
          accessible payment system. It allows people to make and receive
          payments without any intermediaries, lessening the burden of linking a
          bank account or depositing any money upfront.
        </p>
      </div>
      <div>
        <a
          className={`
          md:max-w-3xl max-w-sm md:mx-auto flex flex-row justify-end
          bg-gradient-to-b from-coral-red to-neon-pink
          rounded-lg overflow-hidden mb-4 mx-4
        `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          href={ExternalLinks.NETWORK}
        >
          <img src={isHovered ? worldHovered : world} alt="world icon" />
          <div className="absolute max-w-3xl mx-auto text-white md:pt-24 pt-4 px-10 md:px-28">
            <p className="md:text-2xl text-xl mb-8">
              Trustlines Foundation is part of the Trustlines Network ecosystem.
              <br />
              <br />
              Find out more by visiting the Trustlines Network website.
            </p>
            <ArrowRight className="fill-current" />
          </div>
        </a>
      </div>
    </section>
  );
}
