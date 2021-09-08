import React from "react";

import { Card } from "../../common/components/card";
import { LinkButton } from "../../common/components/link-button";
import ToggleSwitch from "../../common/components/toggle-switch";

import { Check } from "../../common/components/icons/check";
import { Mail } from "../../common/components/icons/mail";
import { MessageBox } from "../../common/components/icons/message-box";
import { AtSign } from "../../common/components/icons/at-sign";
import { Send } from "../../common/components/icons/send";

export function ContactHero() {
  return (
    <section className="container mx-auto px-4 mb-32 text-rich-black-lighter">
      <div className="hero-header">
        <div className="flex-1">
          <h1 className="text-6xl font-semibold leading-tight mb-10 text-rich-black">
            Contact Us
          </h1>
        </div>
      </div>
      <div>
        <Card className="shadow-2xl bg-off-white p-4">
          <div className="flex flex-col justify-center w-full p-4">
            <div>
              <h3 className="text-lg font-semibold">
                Drop us a line, inquire about open positions, or give us
                feedback
              </h3>
            </div>
            <div className="flex flex-row justify-center w-full">
              <div className="w-full px-2">
                <div className="flex flex-row items-center rounded-full bg-grey-lighter text-rich-black-ligther h-14 my-4">
                  <div className="pl-4">
                    <MessageBox />
                  </div>
                  <input
                    className="text-lg bg-grey-lighter mx-2 px-2 w-full rounded-full placeholder-rich-black-lightest"
                    type="email"
                    name="EMAIL"
                    placeholder="Message"
                  />
                </div>
              </div>
              <div className="w-full px-2">
                <div className="flex flex-row items-center rounded-full bg-grey-lighter text-rich-black-ligther h-14 my-4">
                  <div className="pl-4">
                    <AtSign />
                  </div>
                  <input
                    className="text-lg bg-grey-lighter w-full ml-2 px-2 placeholder-rich-black-lightest"
                    type="email"
                    name="EMAIL"
                    placeholder="Email address"
                  />
                  <div>
                    <button
                      className="h-14 w-14 bg-rich-black rounded-full flex items-center justify-center"
                      type="submit"
                      value="Submit"
                    >
                      <Send />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ToggleSwitch
                name="signup"
                id="signup"
                label="Sign up to receiving the latest updates"
              />
            </div>
          </div>
        </Card>
      </div>
      <div className="py-10">
        <LinkButton
          isDark
          className="bg-rich-black hover:text-white hover:bg-rich-black-lighter"
          href="mailto:contact@trustlines.com"
        >
          <Mail className="stroke-current text-white" />
          <span className="px-2 w-full">contact@trustlines.com</span>
        </LinkButton>
      </div>
    </section>
  );
}
