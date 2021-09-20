import React from "react";
import MessageBlock from "../components/MessageBlock";
import Screen from "./Screen";
import * as blockexplorer from "../../../common/blockexplorer";

export default function WaitForConfirmation({ txHash }) {
  return (
    <Screen faIcon="fa fa-spinner fa-pulse" title="Waiting for confirmation...">
      <MessageBlock>
        Your transaction has been sent and we are waiting for confirmation.
        <br />
        You can check the status on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={blockexplorer.generateTransactionUrl(txHash)}
        >
          Etherscan
        </a>
        .
      </MessageBlock>
    </Screen>
  );
}
