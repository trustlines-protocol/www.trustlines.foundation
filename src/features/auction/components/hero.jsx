import React from "react";

import auctionGraph from "../images/auction-graph.svg";

export function AuctionHero() {
  return (
    <section className="container mx-auto px-4 mb-32">
      <div className="flex flex-row items-center justify-between">
        <div className="flex-1 flex flex-col">
          <h1 className="text-6xl font-semibold leading-tight mb-4">
            The Trustlines
            <br />
            Validator Auction
          </h1>
          <p className="text-2xl leading-tight text-rich-black-lighter">
            The auction is used to determine the validator set for the
            Trustlines Blockchain. The set is valid for nine months. To
            participate in the auction,{" "}
            <a href="/" className="underline" rel="noopener noreferrer">
              a whitelisted Ethereum address
            </a>{" "}
            has to bid with Trustlines Network Tokens (TLN) after the auction
            has started and before it has ended.
          </p>
        </div>
        <div className="flex-1 flex flex-row items-center justify-end">
          <img src={auctionGraph} alt="auction graph" />
        </div>
      </div>
      <div className="flex flex-row mt-6">
        <div className="bg-majorelle-blue-pastel text-majorelle-blue py-2 flex flex-row w-full justify-center rounded-full">
          Please be sure to not send TLN directly to the auction contract!
        </div>
      </div>
    </section>
  );
}
