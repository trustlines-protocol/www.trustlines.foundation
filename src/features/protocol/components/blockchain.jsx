import React from "react";

import { LinkButton } from "../../common/components/link-button";
import { Loading } from "../../common/components/icons/loading";
import { Smiley } from "../../common/components/icons/smiley";
import { Shield } from "../../common/components/icons/shield";
import { Branch } from "../../common/components/icons/branch";

import block from "../images/block.svg";
import { Card } from "../../common/components/card";

const CHARACTERISTICS = [
  {
    icon: <Loading />,
    text: "Based on Parity's Aura consensus algorithm",
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
    icon: <Shield />,
    text: "Staking & slashing to combat equivocation",
  },
  {
    icon: <Branch />,
    text: "Hard-forking as an additional defense mechanism",
  },
];

export function ProtocolBlockchain() {
  return (
    <section className="bg-off-white md:py-28 py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 md:py-40 py-10">
        <div className="flex-1 flex flex-col justify-center">
          <div className="max-w-sm flex flex-col">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-rich-black-lightest">
              Blockchain
            </h1>
            <div className="py-8 text-rich-black text-xl md:text-2xl md:font-semibold md:pr-0 pr-10">
              <p>
                {" "}
                The Trustlines Blockchain is a minimal viable{" "}
                <a href="/">Proof-of-Stake (mPoS)</a> Ethereum sidechain.
              </p>
              <p className="pt-4">
                It enables us to work with the latest technology in privacy and
                other things.
              </p>
            </div>
            <div className="mt-4">
              <LinkButton href="/" label="Read more about the technology →" />
            </div>
          </div>
        </div>
        <div className="bg-blockchain bg-no-repeat bg-contain bg-center mt-4">
          <div className="flex md:justify-end">
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {CHARACTERISTICS.map((characteristic, i) => (
                <Card className="bg-grey-lighter rounded-2xl flex flex-col justify-evenly items-center md:h-56 md:w-56 p-4">
                  {characteristic.icon}
                  <div className="text-rich-black md:text-2xl text-center">
                    {characteristic.text}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
