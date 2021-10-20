import React from "react";

import { LinkButton } from "../../common/components/link-button";
import { Loading } from "../../common/components/icons/loading";
import { Smiley } from "../../common/components/icons/smiley";
import { Shield } from "../../common/components/icons/shield";
import { Branch } from "../../common/components/icons/branch";

import { Card } from "../../common/components/card";
import { ExternalLinks } from "../../../constants";

const cardStyles = {
  divClasses:
    "rounded-2xl flex flex-col justify-evenly items-center md:h-56 h-40 md:w-56 w-40 p-4 md:m-4 md-0",
};

const CHARACTERISTICS = [
  {
    icon: <Loading />,
    text: "Based on the OpenEthereum Aura consensus algorithm",
    bg: "bg-gradient-to-br from-card-colors-majorelle to-card-colors-green",
  },
  {
    icon: <Smiley />,
    text: (
      <span>
        All staked
        <br />
        validators are
        <br /> pseudo-
        <br />
        anonymous
      </span>
    ),
    bg:
      "backdrop-filter bg-gradient-to-br from-card-colors-green to-card-colors-majorelle",
  },
  {
    icon: <Shield />,
    text: "Staking & slashing to combat equivocation",
    bg: "bg-gradient-to-br from-card-colors-green to-card-colors-majorelle",
  },
  {
    icon: <Branch />,
    text: "Hard-forking as an additional defense mechanism",
    bg: "bg-gradient-to-br from-card-colors-majorelle to-card-colors-blue",
  },
];

export function ProtocolBlockchain() {
  return (
    <section className="md:py-6 py-6 md:px-12">
      <div className="md:container mx-auto px-0 mx-0 grid md:grid-cols-2 grid-cols-1 md:py-20 py-10 w-screen px-4">
        <div className="flex-1 flex flex-col justify-center">
          <div className="max-w-sm flex flex-col">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-rich-black-lightest">
              Blockchain
            </h1>
            <div className="py-8 text-rich-black text-xl md:text-2xl md:font-semibold md:pr-0 pr-10">
              <p>
                The Trustlines Blockchain is a Proof-of-Stake sidechain to
                Ethereum.
              </p>
              <p className="pt-4">
                It enables us to work with the latest technology in privacy and
                other things.
              </p>
            </div>
            <div className="md:py-4 py-8">
              <LinkButton
                href={ExternalLinks.BLOCKCHAIN}
                className="bg-grey text-rich-black transition duration-500 ease-in-out hover:bg-majorelle-blue hover:text-off-white"
                label="Read more about the technology →"
              />
            </div>
          </div>
        </div>
        <div className="bg-blockchain bg-no-repeat md:bg-auto bg-contain bg-left md:pt-0 pt-4 mx-auto">
          <div className="flex md:justify-center">
            <div className="grid grid-cols-2 grid-rows-2 md:gap-4 gap-6">
              {CHARACTERISTICS.map((characteristic, i) => (
                <Card
                  className={`${cardStyles.divClasses} ${characteristic.bg}`}
                >
                  {characteristic.icon}
                  <div className="text-white md:text-xl text-center">
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
