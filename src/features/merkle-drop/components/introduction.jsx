import React from "react";

import { LinkButton } from "../../common/components/link-button";

export function MerkleDropIntroduction() {
  return (
    <section className="bg-rich-black">
      <div className="container mx-auto px-4 flex flex-col py-40">
        <div className="flex-1">
          <div>
            <h1 className="text-5xl leading-tight my-8 text-off-white font-semibold">
              Introducing The Trustlines Merkle Drop
            </h1>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col pl-4 text-off-white">
            <p>
              Trustlines Blockchain requires transaction fees to be paid in
              Trustlines Network Coins (TLC). To reach a broad set of
              individuals, we conducted a Merkle drop of Trustlines Network
              Tokens (TLN) on Ethereum. TLN are ERC20 tokens that can be
              converted to TLC by sending them to a bridge contract.
            </p>
            <p>
              The Merkle drop is a smart contract deployed on the Ethereum
              blockchain. It contains a list of addresses and the amount of
              claimable TLN per address in the form of a Merkle root. In order
              to claim the tokens, recipients have to provide a Merkle proof to
              this contract.
            </p>
            <p>
              Trustlines Foundation aims to distribute up to 70% of TLN of which
              50% were allocated in the first Merkle drop. More details will be
              communicated once the final Merkle drop list has been created.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
