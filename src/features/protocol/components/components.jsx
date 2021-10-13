import React from "react";

import { LinkButton } from "../../common/components/link-button";
import { ExternalLinks } from "../../../constants";

import protocolElements from "../images/protocol-elements.svg";

const COMPONENTS = [
  {
    name: "Smart Contract System",
    body:
      "The smart contract system is a collection of smart contracts deployed on the Trustlines Blockchain. The contracts execute transfers within the Trustlines Protocol.",
  },
  {
    name: "Relay Servers",
    body:
      "The relay servers act as a bridge between applications and the Trustlines Blockchain. They offer services that aren't feasible to implement on-chain or within the applications or the devices they run on.",
  },
  {
    name: "Client Library",
    body:
      "The client library is a Javascript library that makes it easy to build applications on top of the Trustlines Protocol. It provides a high-level API enabling applications to interact with the smart contract system on the blockchain via the relay servers.",
  },
];

export function ProtocolComponents() {
  return (
    <section className="bg-rich-black">
      <div className="container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 md:py-40 py-4">
        <div className="flex-1">
          <div>
            <img src={protocolElements} alt="protocol elements" />
            <h1 className="md:text-5xl text-4xl leading-tight my-8 text-off-white font-semibold">
              Protocol
            </h1>
            <p className="text-base text-off-white max-w-md">
              Open-source set of rules, processes, and definitions forged into
              deployable code mapping trust-based relationships onto trustless
              infrastructure.
            </p>
            <div className="flex flex-row items-center md:justify-start justify-center md:py-14 py-8">
              <LinkButton
                className="transition duration-500 ease-in-out hover:bg-majorelle-blue"
                isDark
                label="Developer documentation →"
                href={ExternalLinks.DEV_DOCS}
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col pl-4">
            {COMPONENTS.map((component, i) => (
              <div className="flex flex-col text-off-white mb-8">
                <h4 className="md:text-2xl font-semibold mb-2">
                  {component.name}
                </h4>
                <p className="md:text-xl">{component.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
