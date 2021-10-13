import React from "react";
import { Button } from "./button";
import { PrivacyPolicy } from "./privacy-policy";

function PrivacyPolicyModal(props) {
  const { onClose } = props;

  return (
    <>
      <div className="justify-center items-center md:flex md:m-0 m-2 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-3xl shadow-card-gray-light relative flex flex-col w-full bg-off-white outline-none focus:outline-none">
            <div className="flex-1 flex-cols items-center md:p-10 p-2"></div>
            <div className="max-h-80 overflow-scroll md:px-10 px-4 terms-and-conditions">
              <PrivacyPolicy />
            </div>
            <div className="flex items-center justify-center p-10">
              <Button
                onClick={() => {
                  onClose();
                }}
                isDark
                className="bg-rich-black hover:bg-rich-black-lighter text-off-white px-8 py-4 mx-2"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default PrivacyPolicyModal;
