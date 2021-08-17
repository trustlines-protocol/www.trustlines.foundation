import React from "react";

import protocolHero from "../../images/protocol-hero.svg";

export function ProtocolHero() {
  return (
    <section className="container mx-auto px-4 mb-32 text-rich-black-lighter">
      <div className="flex flex-row items-center justify-between">
        <div className="flex-1">
          <h1 className="text-6xl font-semibold leading-tight mb-10 text-rich-black">
            The
            <br />
            Trustlines Protocol
          </h1>
          <h3 className="text-2xl font-semibold leading-snug max-w-lg text-rich-black-lighter">
            Open-source set of rules, processes, and definitions forged into
            deployable code mapping trust-based relationships onto trustless
            infrastructure.
          </h3>
        </div>
        <img src={protocolHero} alt="lock with arrow" />
      </div>
    </section>
  );
}
