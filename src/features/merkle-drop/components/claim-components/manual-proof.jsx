import React, { useCallback } from "react";
import copy from "copy-to-clipboard";
import { notify } from "react-notify-toast";
import { Copy } from "../../../common/components/icons/copy";
import { Button } from "../../../common/components/button";

function calculateRowCount(proof) {
  return Math.ceil(JSON.stringify(proof).length / 70);
}

function ManualProof({ proof, originalAmount, closeModal }) {
  const contractAddress = process.env.REACT_APP_MERKLE_DROP_ADDRESS;

  const showCopyMessage = copiedObjectName => {
    notify.show(`Copied ${copiedObjectName}`, "success", 1000);
  };

  const copyProof = useCallback(() => {
    copy(JSON.stringify(proof));
    showCopyMessage("Proof");
  }, [proof]);

  const copyAmount = useCallback(() => {
    copy(originalAmount);
    showCopyMessage("Original Amount");
  }, [originalAmount]);

  const copyContractAddress = useCallback(() => {
    copy(contractAddress);
    showCopyMessage("Contract Address");
  }, [contractAddress]);

  return (
    <>
      <div className="justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-3xl shadow-card-gray-light relative flex flex-col w-full bg-off-white outline-none focus:outline-none">
            <div className="flex-1 flex-cols items-center p-6"></div>
            <div className="max-h-80 overflow-scroll px-10">
              <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                  <div>
                    <label className="label has-text-weight-light has-text-grey has-text-left">
                      Contract Address
                    </label>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-row items-center w-full rounded-full bg-grey-lighter text-rich-black-ligther h-12 my-4">
                      <input
                        className="bg-grey-lighter ml-2 px-2 w-full rounded-full placeholder-rich-black-lightest text-center"
                        autoComplete="off"
                        spellCheck="false"
                        type="text"
                        value={contractAddress}
                        readOnly
                      />
                      <Button className="pr-4" onClick={copyContractAddress}>
                        <Copy />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>
                    <label className="label has-text-weight-light has-text-grey has-text-left">
                      Amount
                    </label>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-row items-center w-full rounded-full bg-grey-lighter text-rich-black-ligther h-12 my-4">
                      <input
                        className="bg-grey-lighter ml-2 px-2 w-full rounded-full placeholder-rich-black-lightest text-center"
                        autoComplete="off"
                        spellCheck="false"
                        type="text"
                        value={originalAmount}
                        readOnly
                      />
                      <Button className="pr-4" onClick={copyAmount}>
                        <Copy />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>
                    <label className="label has-text-weight-light has-text-grey has-text-left">
                      Merkle proof
                    </label>
                  </div>
                  <div className="flex-1">
                    <div className="w-full rounded-2xl bg-grey-lighter text-rich-black-ligther my-4">
                      <div className="flex flex-row justify-end">
                        <Button className="p-4" onClick={copyProof}>
                          <Copy />
                        </Button>
                      </div>
                      <textarea
                        rows={calculateRowCount(proof)}
                        autoComplete="off"
                        spellCheck="false"
                        value={JSON.stringify(proof)}
                        className="bg-grey-lighter px-4 rounded-2xl w-full placeholder-rich-black-lightest text-center"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center p-10">
              <Button
                isDark
                onClick={() => {
                  closeModal();
                }}
                className="px-8 py-4 mx-2"
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

export default ManualProof;
