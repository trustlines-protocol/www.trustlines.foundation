import React from "react";

import { Card } from "../../common/components/card";
// import TermsModal from "./terms";
import { Button } from "../../common/components/button";
import TermsAndConditions from "./terms";
import BidBox from "./bid-box";

const CONTENTS = [
  {
    text:
      "A validator auction is a smart contract on Ethereum. The Trustlines Foundation triggers the start of the auction at a provisioned date and time by sending a transaction.",
  },
  {
    text:
      "The auction defines a price per validator slot that continuously decreases according to a specified function.",
  },
  {
    text:
      "Only accounts that have been whitelisted by the Foundation are eligible to participate. Each account can participate only once.",
  },
  {
    text:
      "The auction ends with a certain number of bids, or after two weeks from the start time, whichever comes first. The number of participants at the end defines the result of the auction.",
  },
  {
    text:
      "If the auction fails, all participants can withdraw the entirety of the TLN they used to bid. They can withdraw their bid by calling the auction contract's `withdraw` function.",
  },
  {
    text:
      'If the auction is successful, the last bid\'s price is defined as the "slot price." Every participant can withdraw the difference between the slot price and their bid. All TLN used in successful bids will be transferred to the deposit locker contract and kept there as a stake for the duration of the validator period.',
  },
];

export function AuctionWithdraw() {
  return (
    <section className="bg-rich-black">
      <div className="container mx-auto px-4 py-40">
        <div className="pb-24">
          <div>
            <h1 className="text-5xl leading-tight my-8 font-semibold text-aquamarine-green">
              Withdraw excess from your bid
            </h1>
          </div>
          <div>
            <BidBox />
          </div>
        </div>
        <div className="pt-16">
          {CONTENTS.map((content, i) => (
            <div>
              {i !== 0 ? (
                <hr className="border-rich-black-lighter pb-2 mt-14" />
              ) : null}
              <p className="text-grey text-sm mb-24">{content.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
