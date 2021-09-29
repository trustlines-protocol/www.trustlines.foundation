import React from "react";
import { Heart } from "../../common/components/icons/heart";
import { Award } from "../../common/components/icons/award";

export function GrantsEligibility() {
  return (
    <section className="container mx-auto px-4 mb-10 md:mb-32 text-rich-black-lighter">
      <div className="hero-header">
        <div className="flex-1">
          <h1 className="md:text-6xl text-4xl font-semibold leading-tight mb-10 text-rich-black">
            Eligibility <br />
            requirements
          </h1>
          <div className="flex flex-col md:flex-row md:space-y-0 space-y-6">
            <div className="flex md:flex-row flex-col md:items-center md:justify-center md:p-4">
              <div className="py-4 md:px-8">
                <Heart />
              </div>
              <div>
                <h3 className="text-2xl font-semibold py-2">
                  Open-source software
                </h3>
                <p>
                  As the Foundation values and aims to promote the philosophy of
                  decentralized networks, projects should also be open source.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:items-center md:justify-center md:p-4">
              <div className="py-4 md:px-8">
                <Award />
              </div>
              <div>
                <h3 className="text-2xl font-semibold py-2">
                  Aiding the Trustlines cause
                </h3>
                <p>
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
