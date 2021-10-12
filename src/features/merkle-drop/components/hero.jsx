import React from "react";

import ClaimFlow from "./claim-flow";
import { LinkButton } from "../../common/components/link-button";
import { ExternalLinks } from "../../../constants";

export function MerkleDropHero() {
  return (
    <section className="container mx-auto px-4 md:mb-32 mb-10 text-rich-black-lighter md:py-20 bg-key bg-no-repeat bg-contain">
      <div className="hero-header items-center flex md:flex-row flex-col">
        <div className="md:flex-1 sm:w-1/2 w-2/3 self-baseline md:self-center ml-4 md:ml-0">
          <h1 className="md:text-6xl text-4xl font-semibold leading-tight mb-10 text-rich-black">
            Merkle Drop
          </h1>
          <p className="text-2xl">Claim your Trustlines Network Tokens</p>
          <div className="mt-12 ml-1 pb-6 sm:pb-0">
            <LinkButton
              href={ExternalLinks.MERKLE_DROP_BLOG}
              className="bg-grey text-rich-black transition duration-500 ease-in-out hover:bg-majorelle-blue hover:text-off-white"
              label="Read more →"
            />
          </div>
        </div>
        <div className="flex-1">
          <ClaimFlow />
        </div>
      </div>
    </section>
  );
}
