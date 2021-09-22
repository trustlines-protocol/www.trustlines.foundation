import React from "react";
import { LinkButton } from "../../../common/components/link-button";

import * as blockexplorer from "../../../common/utils/blockexplorer";
import { parseTokenAmount } from "../../../common/utils/math";
import Message from "./message";
import RetryButton from "./retry-button";

function ClaimSuccess({ confirmations, txHash, amount, reset }) {
  const confirmationsString =
    confirmations <= 20 ? confirmations.toString() : "> 20";

  return (
    <div className="flex flex-col">
      <div className="text-lg font-semibold py-4">
        {amount && parseTokenAmount(amount)} <br />
        Tokens successfully claimed!
      </div>
      <div className="pb-4">
        <Message>[{confirmationsString}] confirmations</Message>
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

export default ClaimSuccess;
