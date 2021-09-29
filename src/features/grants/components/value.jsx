import React from "react";
import { Currencies } from "../../common/components/icons/currencies";
import { BookOpen } from "../../common/components/icons/book-open";
import { Traget } from "../../common/components/icons/target";

export function GrantsValue() {
  return (
    <section className="container mx-auto px-4 mb-10 md:mb-32 text-rich-black-lighter">
      <div className="hero-header">
        <div className="flex-1">
          <h1 className="md:text-6xl text-4xl font-semibold leading-tight mb-10 text-rich-black">
            Our value proposition
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="flex flex-col p-4">
              <div className="flex flex-rows">
                <div className="flex pr-4 items-center justify-center">
                  <Currencies />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold py-2">Funding</h3>
                </div>
              </div>
              <div>
                <p>
                  The total size of the grant depends on the scope of your
                  project, requirements and the estimated budget of the project.
                  It will be paid out in TLN. To get the funding, you would need
                  to define the project milestones, your payouts would depend on
                  them.
                </p>
              </div>
            </div>
            <div className="flex flex-col p-4">
              <div className="flex flex-rows">
                <div className="flex pr-4 items-center justify-center">
                  <BookOpen />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold py-2">Mentorship</h3>
                </div>
              </div>
              <div>
                <p>
                  We offer mentorship and provide you access to our network in
                  the Ethereum ecosystem. We can also connect you to projects
                  similar to yours.
                </p>
              </div>
            </div>
            <div className="flex flex-col p-4">
              <div className="flex flex-rows">
                <div className="flex pr-4 items-center justify-center">
                  <Traget />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold py-2">
                    Use of trademarks
                  </h3>
                </div>
              </div>
              <div>
                <p>
                  The Trustlines trademarks can be used following the Trustlines
                  Trademark Guidelines. This way, your project can already
                  benefit from the popularity of the Trustlines Protocol
                  starting day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
