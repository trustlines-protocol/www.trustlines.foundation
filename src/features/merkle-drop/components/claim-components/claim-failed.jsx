import React from "react";
import RetryButton from "./retry-button";
import * as blockexplorer from "../../../common/utils/blockexplorer";
import { LinkButton } from "../../../common/components/link-button";
import Message from "./message";

function ClaimFailed({ errorMessage, txHash, reset }) {
  return (
    <div className="flex flex-col">
      <div className="text-lg font-semibold py-4">Claiming failed!</div>
      <div className="pb-4">
        <Message>{errorMessage}</Message>
      </div>
      <div className="flex flex-row space-x-2">
        <div>
          {txHash && (
            <LinkButton
              rel="noopener noreferrer"
              href={blockexplorer.generateTransactionUrl(txHash)}
            >
              View transaction on Etherscan →
            </LinkButton>
          )}
        </div>
        <div>
          <RetryButton reset={reset} />
        </div>
      </div>
    </div>
  );
}

export default ClaimFailed;
