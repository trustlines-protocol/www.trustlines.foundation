import React from "react";

import key from "../images/key.svg";
import ClaimFlow from "./claim-flow";

export function MerkleDropHero() {
  return (
    <section
      className="container mx-auto px-4 mb-32 text-rich-black-lighter"
      style={{
        backgroundImage: `url(${key})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="hero-header items-center flex flex-wrap">
        <div className="flex-1">
          <h1 className="text-6xl font-semibold leading-tight mb-10 text-rich-black">
            Merkle Drop
            <br />
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
