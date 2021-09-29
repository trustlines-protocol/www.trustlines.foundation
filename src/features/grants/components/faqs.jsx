import React from "react";
import { Card } from "../../common/components/card";
import { Warning } from "../../common/components/icons/warning";

export function GrantsFAQ() {
  return (
    <section className="container mx-auto px-4 mb-0 md:mb-32 text-rich-black-lighter">
      <div className="hero-header">
        <div className="flex-1">
          <h1 className="md:text-6xl text-4xl font-semibold leading-tight mb-10 text-rich-black">
            Frequently Asked <br /> Questions
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col md:p-4">
              <div>
                <ul className="md:list-disc list-inside space-y-4">
                  <li>
                    <span className="font-semibold">
                      I have received some form of funding already, but it is
                      not sufficient. Can I still apply?
                    </span>
                    <p>
                      Yes. However, the Trustlines Foundation reserves the right
                      to access the complete information regarding your use of
                      funds to determine your eligibility during the evaluation
                      process.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold">
                      Does the Trustlines Foundation require equity in return?
                    </span>
                    <p>
                      No, the Trustlines Foundation does not require any equity
                      or control over your project.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold">
                      Can I apply as a legal entity or private person?
                    </span>
                    <p>
                      If a legal entity has already been established, apply as
                      such. If not, or if you’re in the process of forming a
                      legal entity, we ask you to apply as a private person
                      initially.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold">
                      What is expected of me when I receive a grant?
                    </span>
                    <p>
                      This depends on various aspects, such as the grant size.
                      It will be agreed upon before receiving funding. We may
                      ask you to give periodic updates on the project’s
                      progress.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold">
                      Is my project eligible if only parts of it are open
                      source?
                    </span>
                    <p>
                      Yes, funding is still possible. In this case, please
                      outline what parts exactly will or will not be open source
                      in your application.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="my-4">
                <Card className="bg-cyber-yellow-lighter">
                  <div className="flex flex-row p-8">
                    <div className="mr-4">
                      <Warning />
                    </div>
                    <div className="max-w-sm">
                      <h3 className="text-cyber-yellow font-semibold">
                        Please note that these guidelines are always a work in
                        progress.
                      </h3>
                    </div>
                  </div>
                </Card>
              </div>
              <div>
                <Card className="md:justify-start md:bg-transparent bg-rich-black md:text-rich-black text-off-white">
                  <div>
                    <div className="text-center md:text-left">
                      <div className="font-semibold md:text-base text-lg md:p-0 p-4">
                        Do you have any further questions?
                      </div>
                      <div className="flex md:inline flex-col items-center justify-center">
                        We are happy to help at{" "}
                        <a
                          href="mailto:contact@trustlines.foundation"
                          className="flex flex-row items-center justify-center my-4 md:inline md:underline md:p-0 p-3 w-max rounded-full md:rounded-none md:bg-transparent bg-off-white text-rich-black md:font-normal font-semibold self-center"
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
