import React, { useState, useEffect } from "react";
import { Button } from "../../common/components/button";

const SCROLL_THRESHOLD = 5;

const elementScrolledToBottom = element => {
  return (
    element.scrollHeight - element.scrollTop <=
    element.clientHeight + SCROLL_THRESHOLD
  );
};

function TermsAndConditionsModal({ onReject, onAccept, children }) {
  const [scrolledToModalBottom, setScrolledToModalBottom] = useState(false);
  const termsAndConditionsModalReference = React.createRef();

  const checkAndSetScrolledToModalBottom = () => {
    if (elementScrolledToBottom(termsAndConditionsModalReference.current)) {
      setScrolledToModalBottom(true);
    }
  };

  useEffect(() => {
    checkAndSetScrolledToModalBottom();
    window.addEventListener("resize", checkAndSetScrolledToModalBottom);
    return () => {
      window.removeEventListener("resize", checkAndSetScrolledToModalBottom);
    };
  });

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-3xl shadow-card-gray-light relative flex flex-col w-full bg-rich-black outline-none focus:outline-none">
            <div className="flex-1 flex-cols items-center p-10">
              <div className="py-5">
                <h1 className="text-grey text-3xl font-semibold">
                  Terms and Conditions
                </h1>
              </div>
            </div>
            <div
              className="max-h-80 overflow-scroll px-10 text-white"
              onScroll={checkAndSetScrolledToModalBottom}
              ref={termsAndConditionsModalReference}
            >
              {children}
            </div>
            <div className="flex items-center justify-center p-10">
              <Button
                isDark
                type="button"
                onClick={onReject}
                label="Reject"
                className="mx-2"
              />
              <Button
                isDark
                type="button"
                onClick={onAccept}
                disabled={!scrolledToModalBottom}
                label="Accept"
                className="mx-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default TermsAndConditionsModal;
