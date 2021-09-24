import React from "react";

import { Check } from "../../common/components/icons/check";

import { isEmailValid } from "../../common/utils/validation";

import mail from "../images/mail.svg";
import { MailDot } from "../../common/components/icons/mail-dot";

export function HomeSubscribe() {
  const [didSubscribe, setDidSubscribe] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const submitUrl = process.env.REACT_APP_MAILCHIMP_URL;

  return (
    <section className="md:container md:mx-auto md:pb-0 pb-20 flex flex-row justify-center pt-16 text-rich-black-lightest">
      <img src={mail} alt="mail" />
      {didSubscribe ? (
        <div className="absolute pt-40 max-w-sm mx-auto flex flex-col">
          <span role="img" aria-label="party">
            🎉
          </span>
          <div className="text-lg text-rich-black-lighter">
            Great. You will be subscribed after confirming the email we just
            sent you.
          </div>
        </div>
      ) : (
        <form
          className="absolute md:pt-40 md:p-0 p-10 pt-28 max-w-sm mx-auto flex flex-col"
          action={submitUrl}
          method="post"
          target="_blank"
          onSubmit={event => {
            setDidSubscribe(true);
          }}
        >
          <MailDot />
          <h1 className="md:text-2xl text-xl font-semibold mt-4">
            Be the first
            <br /> to get updates
          </h1>
          <div className="flex flex-row rounded-full bg-dark-green text-white h-14 my-4">
            <input
              className="md:text-lg bg-dark-green w-full ml-6 px-2 placeholder-off-white"
              type="email"
              name="EMAIL"
              value={email}
              placeholder="your@email.com|"
              onChange={event => setEmail(event.target.value)}
            />
            <div>
              <button
                className="h-14 w-14 bg-dark-green-darker rounded-full flex items-center justify-center"
                disabled={!isEmailValid(email)}
                type="submit"
                value="Submit"
              >
                <Check />
              </button>
            </div>
          </div>
          <div className="md:text-sm text-xs text-rich-black-lightest">
            By submitting your email address you acknowledge that your
            information will be transferred to Mailchimp for processing and
            agree to our{" "}
            <a href="/" rel="noopener noreferrer" className="underline">
              privacy policy
            </a>
            .
          </div>
        </form>
      )}
    </section>
  );
}
