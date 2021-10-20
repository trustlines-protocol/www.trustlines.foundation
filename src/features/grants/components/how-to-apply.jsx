import React from "react";
import { Card } from "../../common/components/card";
import { LinkButton } from "../../common/components/link-button";

export function GrantsHowToApply() {
  return (
    <section className="container mx-auto px-4 mb-10 md:mb-32 text-rich-black-lighter">
      <div className="hero-header">
        <div className="flex-1 md:px-20">
          <h1 className="md:text-6xl text-4xl font-semibold leading-tight md:mb-10 text-grey-darker text-opacity-60">
            How to apply
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col md:px-4 md:pl-0 py-4 text-grey-lighter">
              <div>
                <p>
                  You can apply anytime. Once we receive your application, we
                  will start the evaluation process that includes the initial
                  screening of your application, followed by an in-depth review
                  and an interview if necessary.
                </p>
                <p>&nbsp;</p>
                <p>
                  The duration of this process depends on level of detail of
                  your application and the scope of your project in general. We
                  might contact you for additional information if something is
                  missing.
                </p>
              </div>
              <div className="py-16">
                <LinkButton
                  className="bg-card-colors-input_grey hover:bg-majorelle-blue hover:text-off-white font-semibold text-off-white text-base md:w-max w-full justify-center transition duration-500 ease-in-out transition-all"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdSGkkafn3jDvFmv8S_FwWVoSkGXc6UGMDjTKw6Maoibcz5Jg/viewform"
                >
                  Fill an Application Form →
                </LinkButton>
              </div>
            </div>
            <div className="md:p-4">
              <Card className="bg-transparent border-2 border-grey-darker">
                <div className="flex flex-col p-8">
                  <div className="pb-4">
                    <h3 className="text-lg font-semibold text-off-white">Important to know</h3>
                  </div>
                  <div>
                    <ul className="list-disc list-inside text-grey-lighter">
                      <li>
                        Please provide us with only one contact person to ease
                        communication if you are applying as a team.
                      </li>
                      <li>
                        As mentioned, payouts are linked to milestones, which
                        are defined during the application process. For this
                        reason, we will track the project’s success throughout
                        the process closely.
                      </li>
                      <li>
                        To ensure compliance with current regulations regarding
                        the financial sector, you or your team will need to pass
                        a standard “Know Your Customer” (KYC) and ”Anti-Money
                        Laundering” (AML) procedure during the review process.
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
