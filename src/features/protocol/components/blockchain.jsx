import React from "react";

import { LinkButton } from "../../common/components/link-button";
import { Loading } from "../../common/components/icons/loading";
import { Smiley } from "../../common/components/icons/smiley";
import { Shield } from "../../common/components/icons/shield";
import { Branch } from "../../common/components/icons/branch";

import block from "../images/block.svg";

const CHARACTERISTICS = [
  {
    icon: <Loading />,
    text: "Based on Parity's Aura consensus algorithm",
  },
  {
    icon: <Shield />,
    text: "Staking & slashing to combat equivocation",
  },
  {
    icon: <Smiley />,
    text: (
      <span>
        All
        <br /> validators
        <br /> are
        <br /> anonymous
      </span>
    ),
  },
  {
    icon: <Branch />,
    text: "Hard-forking as an additional defense mechanism",
  },
];

export function ProtocolBlockchain() {
  return (
    <section className="bg-off-white py-28">
      <div className="container mx-auto px-4 flex flex-row">
        <div className="flex-1 flex flex-col justify-center">
          <div className="max-w-sm flex flex-col">
            <h1 className="text-5xl font-semibold leading-tight text-rich-black-lightest">
              Blockchain
            </h1>
            <p className="py-8 text-rich-black text-2xl font-semibold">
              The Trustlines Blockchain is{" "}
              <a href="/">minimal viable Proof-of-Stake (mPoS)</a> Ethereum
              sidechain.
            </p>
            <div className="mt-4">
              <LinkButton href="/" label="Read more about the technology →" />
            </div>
          </div>
        </div>
        <div className="relative flex-1">
          <img src={block} alt="block" />
          <div className="grid grid-flow-cols grid-cols-2 grid-rows-2 gap-4 absolute top-8 left-28">
            {CHARACTERISTICS.map((characteristic, i) => (
              <div className="rounded-2xl bg-grey-lighter flex flex-col justify-evenly items-center h-56 w-56 p-4">
                {characteristic.icon}
                <div className="text-rich-black text-2xl text-center">
                  {characteristic.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
