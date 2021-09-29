import React from "react";

import auctionGraph from "../images/auction-graph.svg";
import { Card } from "../../common/components/card";
import { ChartKey } from "./chart-key";

export function AuctionHero() {
  return (
    <section className="container mx-auto md:py-0 py-10 px-4 mb-32">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="hero-header items-center md:order-1">
          <div className="flex-1 flex flex-col">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-4">
              The Trustlines
              <br />
              Validator Auction
            </h1>
            <p className="md:text-2xl text-xl leading-tight text-rich-black-lighter">
              The auction is used to determine the validator set for the
              Trustlines Blockchain. The set is valid for nine months. To
              participate in the auction,{" "}
              <a
                href="https://forum.trustlines.network/t/the-third-trustlines-validator-auction/131"
                className="underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                a whitelisted Ethereum address
              </a>{" "}
              has to bid with Trustlines Network Tokens (TLN) after the auction
              has started and before it has ended.
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-6 md:col-span-2 md:order-3">
          <Card className="md:bg-majorelle-blue-pastel md:text-majorelle-blue text-rich-black-lightest w-full py-2">
            Please be sure to not send TLN directly to the auction contract!
          </Card>
        </div>
        <div className="flex flex-col items-end justify-end md:order-2">
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
