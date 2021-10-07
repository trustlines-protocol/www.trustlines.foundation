import React from "react";

import { ArrowRight } from "../../common/components/icons/arrow-right";
import { Group } from "../../common/components/icons/group";
import { ExternalLinks } from "../../../constants";

import world from "../images/world.svg";
import worldHovered from "../images/world-hovered.svg";

export function HomeNetwork() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <section className="md:py-6 py-6">
      <div className="max-w-3xl mx-auto items-center mb-4 flex flex-col justify-items-center">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="#FF7C4E"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.075 8.64376C38.1173 7.68564 36.9803 6.92559 35.7288 6.40704C34.4773 5.88848 33.1359 5.62158 31.7812 5.62158C30.4266 5.62158 29.0852 5.88848 27.8337 6.40704C26.5822 6.92559 25.4451 7.68564 24.4875 8.64376L22.5 10.6313L20.5125 8.64376C18.5781 6.70933 15.9544 5.62258 13.2187 5.62258C10.483 5.62258 7.8594 6.70933 5.92498 8.64376C3.99056 10.5782 2.90381 13.2018 2.90381 15.9375C2.90381 18.6732 3.99056 21.2968 5.92498 23.2313L7.91248 25.2188L22.5 39.8063L37.0875 25.2188L39.075 23.2313C40.0331 22.2736 40.7931 21.1365 41.3117 19.885C41.8302 18.6336 42.0972 17.2922 42.0972 15.9375C42.0972 14.5828 41.8302 13.2414 41.3117 11.99C40.7931 10.7385 40.0331 9.60142 39.075 8.64376V8.64376Z"
            stroke="#FFA0B7"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h1 className="md:text-4xl text-3xl font-semibold leading-tight mb-8 flex-col">
          The Trustlines Network
        </h1>
        <p className="mx-4 md:text-base text-base mb-8 flex-col">
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
      <div className="mx-4">
        <a
          className={`
          max-w-3xl mx-auto flex flex-row justify-end
          bg-gradient-to-b from-coral-red to-neon-pink
          rounded-lg overflow-hidden mb-4
        `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          href={ExternalLinks.NETWORK}
        >
          <img src={isHovered ? worldHovered : world} alt="world icon" />
          <div className="absolute max-w-3xl mx-auto text-off-white pt-24 px-10 md:px-28">
            <p className="md:text-2xl text-xl mb-8">
              Trustlines Foundation is part of the Trustlines Network Ecosystem.
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
