import React from "react";
import RetryButton from "./retry-button";
import * as blockexplorer from "../../../common/utils/blockexplorer";

function ClaimFailed({ errorMessage, txHash, reset }) {
  return (
    <div>
      <div className="box has-text-centered">
        <h1 className="subtitle is-2 has-text-weight-bold">
          &nbsp;Claiming failed.
          <br />
          <span className="icon is-large">
            <i className="fas fa-exclamation-circle fa-lg" />
          </span>
        </h1>
        <div className="has-text-grey has-text-centered">
          {errorMessage}
          <br />
          {txHash && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={blockexplorer.generateTransactionUrl(txHash)}
            >
              View transaction on Etherscan →
            </a>
          )}
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-two-thirds">
          <RetryButton reset={reset} />
        </div>
      </div>
    </div>
  );
}

export default ClaimFailed;
