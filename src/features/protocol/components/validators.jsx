import React from "react";

import { LinkButton } from "../../common/components/link-button";
import { ExternalLinks } from "../../../constants";

import validators from "../images/validators.svg";

export function ProtocolValidators() {
  return (
    <section className="md:py-6 py-6 md:mx-2">
      <div
        className="md:container mx-auto grid md:grid-cols-2 grid-cols-1 md:py-20 py-10 md:px-12"
        id="validators"
      >
        <div className="flex-1 flex flex-col justify-center z-20 px-4">
          <div className="max-w-sm flex flex-col">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-rich-black-lightest">
              Validators
            </h1>
            <p className="py-8 text-rich-black text-xl md:text-2xl md:font-semibold md:pr-0 pr-10">
              The validators ensure the security of the Trustlines Blockchain by
              validating transactions and adding blocks to the blockchain.
            </p>
            <div className="hidden md:block">
              <ul className="list-outside pl-6 list-disc text-lg text-rich-black leading-tight">
                <li className="mb-8">
                  Candidates can gain a slot by participating in a validator
                  auction. The staked amount will be locked for the duration of
                  the validator period.
                </li>
                <li className="mb-8">
                  Validators earn rewards from transaction fees and block
                  rewards in the process.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <LinkButton
                href={ExternalLinks.VALIDATORS_BLOG}
                className="bg-grey transition duration-500 ease-in-out hover:bg-majorelle-blue hover:text-off-white"
                label="Learn more in the Trustlines Blog →"
              />
            </div>
          </div>
        </div>
        <div className="flex-2 flex flex-row items-center justify-center z-10 md:mt-0 -mt-96 md:opacity-100 opacity-40">
          <img src={validators} alt="validators" />
        </div>
      </div>
    </section>
  );
}
