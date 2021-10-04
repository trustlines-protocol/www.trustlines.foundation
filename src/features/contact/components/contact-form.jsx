import React, { useState, useCallback } from "react";

import { Card } from "../../common/components/card";
import { LinkButton } from "../../common/components/link-button";
import ToggleSwitch from "../../common/components/toggle-switch";

import { Mail } from "../../common/components/icons/mail";
import { MessageBox } from "../../common/components/icons/message-box";
import { AtSign } from "../../common/components/icons/at-sign";
import { Send } from "../../common/components/icons/send";
import { Check } from "../../common/components/icons/check";

import { signupNewsletter } from "../../common/utils/newsletter";
import PrivacyPolicyModal from "../../common/components/privacy-modal";

export default function ContactForm(props) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [acceptSignupNewsletter, setAcceptSignupNewsletter] = useState(false);
  const [errors, setErrors] = useState(false);
  const CONTACT_MAIL = process.env.GATSBY_CONTACT_MAIL;
  const FORM_POST_URL = process.env.GATSBY_FORM_POST_URL;

  const submitForm = e => {
    e.preventDefault();
    setShowSuccessMessage(false);
    setShowErrorMessage(false);
    setErrors(false);

    const data = new FormData(e.target);

    const jsonData = Object.fromEntries(data.entries());

    const updatedJsonData = {
      ...jsonData,
      topic: "Trustlines Foundation",
      name: jsonData.email,
    };

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "POST",
      mode: "cors",
      headers: myHeaders,
      body: JSON.stringify(updatedJsonData),
      redirect: "follow",
    };

    fetch(FORM_POST_URL, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          document.getElementById("contactUs").reset();
          if (acceptSignupNewsletter) {
            signupNewsletter(jsonData.email);
          }
          setShowSuccessMessage(true);
        } else {
          setErrors(result.errors);
          setShowErrorMessage(true);
        }
      })
      .catch(error => {
        console.log(error);
        alert("something went wrong");
      });
  };

  const togglePrivacyModal = useCallback(() => {
    setShowPrivacyModal(!showPrivacyModal);
  }, [showPrivacyModal]);

  return (
    <form
      id={"contactUs"}
      name={"contactUs"}
      className={`flex flex-col space-y-4 mt-4 ${props.hidden ? "hidden" : ""}`}
      action={FORM_POST_URL}
      method="POST"
      onSubmit={submitForm}
    >
      {showErrorMessage && (
        <div
          className={"flex justify-between rounded p-2 bg-red-500 text-white"}
        >
          <div>
            There was a problem submitting your message:
            {Object.values(errors).map((error, i) => {
              return <div key={"error" + i}>{error}</div>;
            })}
          </div>
          <button
            className="cursor-pointer hover:opacity-50"
            onClick={() => {
              setShowErrorMessage(false);
            }}
          >
            x
          </button>
        </div>
      )}

      {showSuccessMessage && (
        <div
          className={
            "flex justify-between rounded p-2 bg-majorelle-blue text-white"
          }
        >
          Your message was submitted successfully. We&apos;ll get back to you
          ASAP.
          <button
            className="cursor-pointer hover:opacity-50"
            onClick={() => {
              setShowSuccessMessage(false);
            }}
          >
            x
          </button>
        </div>
      )}
      <div>
        <Card className="shadow-2xl bg-off-white p-4 rounded-sm">
          <div className="flex flex-col justify-center w-full p-4">
            <div>
              <h3 className="text-lg font-semibold">
                Drop us a line, inquire about open positions, or give us
                feedback
              </h3>
            </div>
            <div className="flex md:flex-row flex-col justify-center w-full">
              <div className="w-full px-2">
                <div className="flex flex-row items-center rounded-full bg-grey-lighter text-rich-black-ligther h-14 my-4">
                  <div className="pl-4">
                    <MessageBox />
                  </div>
                  <textarea
                    className="text-lg bg-grey-lighter mx-2 px-2 w-full rounded-full placeholder-rich-black-lightest"
                    name="message"
                    placeholder="Message"
                    required
                    rows="1"
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
                    name="email"
                    placeholder="Email address"
                  />
                  <div>
                    <button
                      className={`h-14 w-14 bg-rich-black rounded-full flex items-center justify-center ${!showSuccessMessage &&
                        "hover:bg-dark-green"}`}
                      type="submit"
                      value="Submit"
                      disabled={showSuccessMessage}
                    >
                      {showSuccessMessage ? <Check /> : <Send />}
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
                checked={acceptSignupNewsletter}
                onChange={() =>
                  setAcceptSignupNewsletter(!acceptSignupNewsletter)
                }
              />
            </div>
            {acceptSignupNewsletter ? (
              <div className="text-sm text-rich-black-lightest p-2">
                By submitting your email address you acknowledge that your
                information will be transferred to Mailchimp for processing and
                agree to our{" "}
                <button
                  type="button"
                  onClick={togglePrivacyModal}
                  className="underline"
                >
                  privacy policy
                </button>
                .
              </div>
            ) : null}
            {showPrivacyModal ? (
              <PrivacyPolicyModal onClose={togglePrivacyModal} />
            ) : null}
          </div>
        </Card>
      </div>
      <div className="py-10">
        <LinkButton
          isDark
          className="md:px-10 px-4 bg-rich-black hover:text-white hover:bg-rich-black-lighter"
          href={`mailto:${CONTACT_MAIL}`}
        >
          <Mail className="stroke-current text-white" />
          <span className="pl-2 w-full">{CONTACT_MAIL}</span>
        </LinkButton>
      </div>
    </form>
  );
}
