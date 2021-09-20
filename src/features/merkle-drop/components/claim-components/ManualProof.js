import React, { useCallback } from "react";
import copy from "copy-to-clipboard";
import { notify } from "react-notify-toast";

function calculateRowCount(proof) {
  return Math.ceil(JSON.stringify(proof).length / 47);
}

function ManualProof({ proof, originalAmount }) {
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
    <div className="columns is-centered">
      <div className="column">
        <div className="content">
          <div className="field">
            <label className="label has-text-weight-light has-text-grey has-text-left">
              Contract Address
            </label>
            <div className="control has-icons-right">
              <input
                rows="1"
                autoComplete="off"
                spellCheck="false"
                className="input"
                value={contractAddress}
                readOnly
              />
              <button
                onClick={copyContractAddress}
                className="icon is-medium is-right borderless-button"
              >
                <i className="fas fa-lg fa-copy is-clickable has-text-info" />
              </button>
            </div>
          </div>
          <div className="field">
            <label className="label has-text-weight-light has-text-grey has-text-left">
              Amount
            </label>
            <div className="control has-icons-right">
              <input
                rows="1"
                autoComplete="off"
                spellCheck="false"
                className="input"
                value={originalAmount}
                readOnly
              />
              <button
                onClick={copyAmount}
                className="icon is-medium is-right borderless-button"
              >
                <i className="fas fa-lg fa-copy is-clickable has-text-info" />
              </button>
            </div>
          </div>
          <div className="field">
            <label className="label has-text-weight-light has-text-grey has-text-left">
              Merkle proof
            </label>
            <div className="control has-icons-right">
              <textarea
                rows={calculateRowCount(proof)}
                autoComplete="off"
                spellCheck="false"
                className="textarea input has-fixed-size"
                value={JSON.stringify(proof)}
                readOnly
              />
              <button
                onClick={copyProof}
                className="icon is-medium is-right borderless-button"
              >
                <i className="fas fa-lg fa-copy is-clickable has-text-info" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManualProof;
