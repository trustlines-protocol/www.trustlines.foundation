import React from "react";
import MessageBlock from "../components/MessageBlock";
import Screen from "./Screen";
import { formatTLNAmount } from "../../common/utils/math";
import * as blockexplorer from "../../../common/blockexplorer";

export default function SuccessfulBid({ txHash, paidSlotPrice }) {
  return (
    <Screen
      faIcon="fa fa-check-circle"
      title="You have successfully made your bid"
    >
      <MessageBlock>
        {`You submitted a bid for a slot price of ${formatTLNAmount(
          paidSlotPrice
        )}`}
        <br />
        You can check your transaction on{" "}
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
