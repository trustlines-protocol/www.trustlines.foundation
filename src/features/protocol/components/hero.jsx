import React from "react";

import protocolHero from "../images/protocol-hero.svg";

export function ProtocolHero() {
  return (
    <section className="container mx-auto md:py-0 py-10 px-4 mb-32 text-rich-black-lighter">
      <div className="grid grid-col-1">
        <div className="hero-header items-center">
          <div className="relative container mx-auto flex flex-row justify-end">
            <div className="absolute md:top-20 left-0 px-6 z-20">
              <h1 className="md:text-6xl text-4xl font-semibold leading-tight mb-2 md:mb-10 text-rich-black">
                The
                <br />
                Trustlines Protocol
              </h1>
              <h3 className="md:text-2xl text-xl font-semibold leading-snug max-w-lg text-rich-black-lighter">
                An open-source technology stack to encourage open collaboration, innovation, and transparency.
              </h3>
            </div>
            <div>
              <img src={protocolHero} className="opacity-60 z-10" alt="layers" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
