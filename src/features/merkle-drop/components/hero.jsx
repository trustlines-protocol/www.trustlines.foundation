import React from "react";

import ClaimFlow from "./claim-flow";
import { LinkButton } from "../../common/components/link-button";
import { ExternalLinks } from "../../../constants";

export function MerkleDropHero() {
  return (
    <section className="mx-0 px-8 md:px-28 text-rich-black-lighter md:py-20 pt-12 pb-0 bg-gradient-to-b from-rich-black-lighter to-rich-black">
      <div className="hero-header items-center flex md:flex-row flex-col">
        <div className="md:flex-1 sm:w-1/2 w-2/3 self-baseline md:self-center md:ml-0">
          <h1 className="md:text-6xl text-5xl font-semibold leading-tight mb-10 text-off-white">
            Merkle Drop
          </h1>
          <p className="text-2xl text-grey-darker">Claim your Trustlines Network Tokens</p>
          <div className="mt-12 ml-1 pb-6 sm:pb-0">
            <LinkButton
              href={ExternalLinks.MERKLE_DROP_BLOG}
              className="bg-grey text-rich-black transition duration-500 ease-in-out hover:bg-majorelle-blue hover:text-off-white font-medium"
              label="Learn more →"
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
