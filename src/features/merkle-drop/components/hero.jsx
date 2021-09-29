import React from "react";

import ClaimFlow from "./claim-flow";

export function MerkleDropHero() {
  return (
    <section className="container mx-auto px-4 md:mb-32 mb-10 text-rich-black-lighter md:py-20 bg-key bg-no-repeat bg-contain">
      <div className="hero-header items-center flex md:flex-row flex-col">
        <div className="md:flex-1 w-1/2 self-baseline md:self-center ml-4 md:ml-0">
          <h1 className="md:text-6xl text-4xl font-semibold leading-tight mb-10 text-rich-black">
            Merkle Drop
            <br className="md:block hidden" />
            Token Claim
          </h1>
        </div>
        <div className="flex-1">
          <ClaimFlow />
        </div>
      </div>
    </section>
  );
}
