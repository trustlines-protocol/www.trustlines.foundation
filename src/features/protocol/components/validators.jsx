import React from "react";

import { LinkButton } from "../../common/components/link-button";

import validators from "../images/validators.svg";

export function ProtocolValidators() {
  return (
    <section className="md:bg-off-white">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row pb-28 gap-y-4" id="validators">
        <div className="flex-1 flex flex-col justify-center">
          <div className="max-w-lg flex flex-col">
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-rich-black-lightest">
              Validators
            </h1>
            <p className="text-xl md:text-2xl text-rich-black md:font-semibold leading-tight my-8">
              The validators ensure the security of the Trustlines Blockchain by validating transactions and adding blocks to the blockchain.
            </p>
            <div className="hidden md:block">
              <ul className="list-outside pl-6 list-disc text-lg text-rich-black leading-tight">
                <li className="mb-8">
                  Candidates can gain a slot by participating in a validator auction. The staked amount will be locked for the duration of the validator period.
                </li>
                <li className="mb-8">
                  Validators earn rewards from transaction fees and block rewards in the process.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <LinkButton href="/" className="transition duration-500 ease-in-out transition-all hover:bg-majorelle-blue hover:text-off-white" label="Learn more in Trustlines 101 →" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-center">
          <img src={validators} alt="validators" />
        </div>
      </div>
    </section>
  );
}
