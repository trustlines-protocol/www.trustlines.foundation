import React from "react";
import { GrantApply } from "./apply";

export function GrantsHero() {
  return (
    <section className="container mx-auto px-4 md:mb-32 mb-10 text-rich-black-lighter">
      <div className="hero-header">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-10 text-rich-black">
            The Trustlines
            <br />
            Grants
          </h1>
          <div className="grid md:grid-cols-2 grid-rows-2">
            <div>
              <h3 className="md:text-2xl text-xl md:font-semibold leading-snug text-rich-black-lighter">
                To promote the financial and economic inclusion of all people,
                we provide grants to projects that actively contribute to the
                development and the usage of the Trustlines ecosystem.
              </h3>
            </div>
            <div className="flex items-center justify-center">
              <GrantApply />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
