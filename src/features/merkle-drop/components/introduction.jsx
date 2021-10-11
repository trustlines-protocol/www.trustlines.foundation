import React from "react";

import { LinkButton } from "../../common/components/link-button";

export function MerkleDropIntroduction() {
  return (
    <section className="bg-rich-black">
      <div className="container mx-auto px-4 sm:px-32 flex flex-col md:py-24 py-10 w-full">
        <div className="flex-1">
          <div>
            <h1 className="md:text-5xl text-4xl leading-tight my-8 text-off-white font-semibold">
              Introducing the Trustlines Merkle Drop
            </h1>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col pl-1 pr-4 sm:pr-60 text-grey">
            <p>
              Trustlines Blockchain requires transaction fees to be paid in Trustlines Network Coins (TLC). To reach a broad set of individuals, we conducted a Merkle Drop of Trustlines Network Tokens (TLN) on Ethereum. TLN are ERC20 tokens that can be converted to TLC by sending them to a bridge contract.
            </p>
            <p className="pt-4">
            The Merkle Drop is a smart contract deployed on the Ethereum blockchain. It contains a list of addresses and the amount of claimable TLN per address in the form of a Merkle root.
            </p>
            <p className="pt-4">
            The amount that an address can claim is decaying over time. The sooner the tokens are claimed, the larger the received quantity of tokens.
            </p>
            <p className="pt-4">
            Trustlines Foundation aims to distribute up to 70% of TLN to the public. For that purpose, 50% of TLN are allocated in the Merkle Drop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
