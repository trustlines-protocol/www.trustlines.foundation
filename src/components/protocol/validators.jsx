import React from "react";

import { LinkButton } from "../link-button";

import validators from "../../images/validators.svg";

export function ProtocolValidators() {
  return (
    <section className="bg-off-white">
      <div className="container mx-auto px-4 flex flex-row pb-28">
        <div className="flex-1 flex flex-col justify-center">
          <div className="max-w-lg flex flex-col">
            <h1 className="text-6xl font-semibold leading-tight text-rich-black-lightest">
              Validators
            </h1>
            <p className="text-2xl text-rich-black font-semibold leading-tight my-8">
              By design, the{" "}
              <a
                href="/"
                className="underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                TLBC
              </a>{" "}
              needs validators. Unlike ordinary Proof-of-Authority (PoA)
              blockchains, in the planned{" "}
              <a
                href="/"
                className="underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                mPoS
              </a>{" "}
              system, validators are anonymous.
            </p>
            <ul className="list-outside pl-6 list-disc text-2xl text-rich-black leading-tight">
              <li className="mb-8">
                Validators ensure the security of the{" "}
                <a
                  href="/"
                  className="underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  TLBC
                </a>{" "}
                by validating transactions and adding blocks in a round-robin
                fashion.
              </li>
              <li className="mb-8">
                Candidates can gain a slot by participating in the auction and
                consequently staking{" "}
                <a
                  href="/"
                  className="underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  TLN
                </a>{" "}
                on the Ethereum main chain for the time of the validation
                period.
              </li>
            </ul>
            <div className="mt-4">
              <LinkButton href="/" label="Learn more in Trustlines 101 →" />
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
