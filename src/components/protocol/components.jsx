import React from "react";

import { LinkButton } from "../link-button";

import protocolElements from "../../images/protocol-elements.svg";

const COMPONENTS = [
  {
    name: "Smart Contract System",
    body: (
      <span>
        Deployed on the Trustlines Blockchain – a{" "}
        <a href="/" className="underline">
          mPoS
        </a>{" "}
        sidechain to Ethereum that stores transactions.
      </span>
    ),
  },
  {
    name: "Relay Servers",
    body:
      "Calculate the optimal paths and relay the transactions sent by applications to which they are connected.",
  },
  {
    name: "Client Library",
    body:
      "A high-level API enabling applications to interact with the smart contract system on the blockchain via the relay servers.",
  },
];

export function ProtocolComponents() {
  return (
    <section className="bg-rich-black">
      <div className="container mx-auto px-4 flex flex-row py-40">
        <div className="flex-1">
          <div>
            <img src={protocolElements} alt="protocol elements" />
            <h1 className="text-5xl leading-tight my-8 text-off-white font-semibold">
              Protocol
            </h1>
            <LinkButton isDark label="View Codebase On GitHub →" href="/" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col pl-4">
            {COMPONENTS.map((component, i) => (
              <div className="flex flex-col text-off-white mb-8">
                <h4 className="text-2xl font-semibold mb-2">
                  {component.name}
                </h4>
                <p className="text-2xl">{component.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
