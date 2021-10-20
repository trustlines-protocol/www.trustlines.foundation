import React from "react";
import { Card } from "../../common/components/card";
import { Warning } from "../../common/components/icons/warning";
import { GrantApply } from "./apply";

export function GrantsFAQ() {
  return (
    <section className="container mx-auto px-4 mb-0 md:mb-32 text-rich-black-lighter">
      <div className="hero-header">
        <div className="flex-1 md:px-20">
          <h1 className="md:text-6xl text-4xl font-semibold leading-tight mb-10 text-grey-darker text-opacity-60">
            Frequently Asked <br /> Questions
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col md:p-4 md:pl-0">
              <div>
                <ul className="md:list-disc list-inside space-y-4 text-grey">
                  <li>
                    <span className="font-semibold text-lg">
                      I have received some form of funding already, but it is
                      not sufficient. Can I still apply?
                    </span>
                    <p className="text-base pt-2 md:pl-4">
                      Yes. However, the Trustlines Foundation reserves the right
                      to access the complete information regarding your use of
                      funds to determine your eligibility during the evaluation
                      process.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-lg">
                      Does the Trustlines Foundation require equity in return?
                    </span>
                    <p className="text-base pt-2 md:pl-4">
                      No, the Trustlines Foundation does not require any equity
                      or control over your project.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-lg">
                      Can I apply as a legal entity or private person?
                    </span>
                    <p className="text-base pt-2 md:pl-4">
                      If a legal entity has already been established, apply as
                      such. If not, or if you’re in the process of forming a
                      legal entity, we ask you to apply as a private person
                      initially.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-lg">
                      What is expected of me when I receive a grant?
                    </span>
                    <p className="text-base pt-2 md:pl-4">
                      This depends on various aspects, such as the grant size.
                      It will be agreed upon before receiving funding. We may
                      ask you to give periodic updates on the project’s
                      progress.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-lg">
                      Is my project eligible if only parts of it are open
                      source?
                    </span>
                    <p className="text-base pt-2 md:pl-4">
                      Yes, funding is still possible. In this case, please
                      outline what parts exactly will or will not be open source
                      in your application.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="my-8">
                <Card className="bg-gradient-to-br from-card-colors-blue to-app-blue">
                  <div className="flex flex-row p-4">
                    <div className="mr-4 stroke-current text-majorelle-blue-lighter">
                      <Warning />
                    </div>
                    <div className="max-w-sm">
                      <h3 className="text-majorelle-blue-pastel font-semibold">
                        Please note that these guidelines are always a work in
                        progress.
                      </h3>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="flex items-center justify-center mt-0 mb-8">
                <GrantApply />
              </div>
              <div>
                <Card className="md:justify-start md:bg-transparent bg-rich-black text-off-white">
                  <div>
                    <div className="text-center md:text-left bg-card-colors-input_grey bg-opacity-50 md:bg-transparent rounded-2xl">
                      <div className="font-semibold md:text-base text-lg md:p-0 p-6">
                        Do you have any further questions?
                      </div>
                      <div className="flex md:inline flex-col items-center justify-center text-grey">
                        We are happy to help at{" "}
                        <a
                          href="mailto:contact@trustlines.foundation"
                          className="flex flex-row items-center justify-center my-4 md:inline md:underline md:p-0 px-6 py-4 w-max rounded-full md:rounded-none md:bg-transparent bg-rich-black-lighter text-grey md:font-normal font-semibold self-center"
                        >
                          contact@trustlines.foundation
                        </a>
                        <span className="hidden md:inline">.</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
