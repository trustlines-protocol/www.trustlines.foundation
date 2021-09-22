import React from "react";
import MessageBlock from "../bid-components/MessageBlock";
import ActionButton from "../bid-components/ActionButton";
import Screen from "./Screen";
import * as blockexplorer from "../../../common/utils/blockexplorer";

export default function TransactionError({ errorMessage, txHash, onTryAgain }) {
  return (
    <Screen faIcon="fa fa-exclamation-circle" title="Something went wrong">
      <MessageBlock>
        {errorMessage} <br />
        Check what went wrong on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={blockexplorer.generateTransactionUrl(txHash)}
        >
          Etherscan
        </a>
        .
      </MessageBlock>
      <ActionButton label="Try again" onClick={onTryAgain} />
    </Screen>
  );
}
