import React from "react";
import Heart from "../images/heart.svg";
import Award from "../images/award.svg";

export function GrantsEligibility() {
  return (
    <section className="container mx-auto px-4 mb-10 md:mb-16 text-rich-black-lighter">
      <div className="hero-header">
        <div className="flex-1 md:px-20">
          <h1 className="md:text-6xl text-4xl font-semibold leading-tight md:mb-10 md-4 text-grey-darker text-opacity-60">
            Eligibility <br />
            requirements
          </h1>
          <div className="flex flex-col md:flex-row md:space-y-0 space-y-6">
            <div className="flex md:flex-row flex-col md:items-center md:justify-center">
              <div className="py-4 md:pr-4 animate-pulse justify-center items-center">
              <img src={Heart} className="md:w-36 w-20 mx-auto" alt="heart" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold py-2 text-off-white">
                  Open-source software
                </h3>
                <p className="text-grey">
                  As the Foundation values and aims to promote the philosophy of
                  decentralized networks, projects should also be open source.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:items-center md:justify-center md:p-4">
              <div className="py-4 md:px-8">
                <img src={Award} className="md:w-36 w-20 mx-auto" alt="award" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold py-2 text-off-white">
                  Aiding the Trustlines cause
                </h3>
                <p className="text-grey">
                  We are offering grants to anyone as we desire to foster all
                  types of projects as long as they support our mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
