import React from "react";
import { GrantApply } from "./apply";

export function GrantsHero() {
  return (
    <section className="md:container mx-auto md:px-12 pt-8 pb-12 md:mb-12 mb-10 text-off-white bg-gradient-to-b from-majorelle-blue to-aquamarine-green">
      <div className="hero-header items-center">
        <div className="flex-1 relative px-4">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-10 text-off-white md:pt-12 pt-4 md:px-8">
            Trustlines
            <br />
            Grants
          </h1>
          <div className="grid md:grid-cols-2 grid-rows-1">
            <div>
              <h3 className="md:text-xl text-xl md:font-semibold leading-snug text-off-white md:px-8 md:max-w-lg">
              To promote financial and economic inclusion, we provide grants to projects that actively contribute to the development and adoption of the Trustlines ecosystem.
              </h3>
            </div>
            <div className="flex items-center justify-center md:mt-0 mt-10">
              <GrantApply />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
