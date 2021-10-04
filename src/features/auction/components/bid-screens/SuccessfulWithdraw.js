import React from "react";
import MessageBlock from "../bid-components/MessageBlock";
import * as blockexplorer from "../../../common/utils/blockexplorer";

export default function SuccessfulWithdraw({ txHash }) {
  return (
    <MessageBlock>
      You have successfully withdrawn your overbid from the auction
      <br />
      You can check your transaction on{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={blockexplorer.generateTransactionUrl(txHash)}
        className="underline"
      >
        Etherscan
      </a>
      . <br />
      You are good to go!
    </MessageBlock>
  );
}
