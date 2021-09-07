import React from "react";

import { Card } from "../../common/components/card";
// import TermsModal from "./terms";
import { Button } from "../../common/components/button";
import TermsAndConditions from "./terms";

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
  const [showModal, setShowModal] = React.useState(false);

  return (
    <section className="bg-rich-black">
      <div className="container mx-auto px-4 py-40">
        <div className="pb-24">
          <div>
            <h1 className="text-5xl leading-tight my-8 font-semibold text-aquamarine-green">
              Withdraw excess from your bid
            </h1>
            <div className="flex flex-row my-2 items-center">
              <Card className="bg-dark-green-lighter rounded-full h-16 w-16 text-3xl font-semibold text-aquamarine-green mr-4">
                1
              </Card>
              <h3 className="text-3xl leading-tight font-semibold text-aquamarine-green">
                Connect to a Wallet
              </h3>
            </div>
            <div className="text-off-white text-sm mb-8">
              To proceed you must read and accept our terms & conditions.
            </div>
            <Button
              label="Terms & Conditions →"
              className="bg-dark-green-lighter text-aquamarine-green-lighter"
              onClick={() => {
                setShowModal(true);
              }}
            />
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
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-3xl shadow-card-gray-light relative flex flex-col w-full bg-rich-black outline-none focus:outline-none">
                <div className="flex-1 flex-cols items-center p-10">
                  <div className="py-5">
                    <h1 className="text-grey text-3xl font-semibold">
                      Terms and Conditions
                    </h1>
                  </div>
                </div>
                <div className="max-h-80 overflow-scroll px-10 text-white">
                  <TermsAndConditions />
                </div>
                <div className="flex items-center justify-center p-10">
                  <Button
                    isDark
                    type="button"
                    onClick={() => setShowModal(false)}
                    label="Reject"
                    className="mx-2"
                  />
                  <Button
                    isDark
                    type="button"
                    onClick={() => setShowModal(false)}
                    label="Accept"
                    className="mx-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </section>
  );
}
