import React from "react";

import auctionGraph from "../images/auction-graph.svg";
import { Card } from "../../common/components/card";
import { ChartKey } from "./chart-key";

export function AuctionHero() {
  return (
    <section className="container mx-auto md:py-0 py-10 px-4 md:mb-20">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="hero-header items-center md:order-1">
          <div className="flex-1 flex flex-col">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-4">
              Trustlines
              <br />
              Validator Auction
            </h1>
            <p className="md:text-xl text-xl leading-tight text-rich-black-lighter">
              The auction is used to determine the validator set for the
              Trustlines Blockchain. The set is valid for nine months.
              Participation in the auction requires{" "}
              <a
                href="https://forum.trustlines.network/t/the-third-trustlines-validator-auction/131"
                className="underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                an Ethereum address to be whitelisted
              </a>{" "}
              for bidding. Trustlines Network Tokens (TLN) can be used to bid
              after the auction has started and before it has ended.
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-6 md:col-span-2 md:order-3">
          <Card className="bg-majorelle-blue-pastel text-majorelle-blue w-full p-4">
            <div>
              Do <b>not</b> send TLN directly to the auction contract!
            </div>
          </Card>
        </div>
        <div className="flex flex-col items-end justify-end md:order-2 md:pt-0 pt-6">
          <div className="-mb-14 z-10">
            <ChartKey />
          </div>
          <div className="m-6">
            <img src={auctionGraph} alt="auction graph" />
          </div>
        </div>
      </div>
    </section>
  );
}
