import React from "react"
import MessageBlock from "../components/MessageBlock"
import Screen from "./Screen"
import { formatTLNAmount } from "../../../common/math"
import * as blockexplorer from "../../../common/blockexplorer"

export default function SuccessfulWithdraw({ txHash }) {
  return (
    <Screen faIcon="fa fa-check-circle" title="You have successfully withdrawn">
      <MessageBlock>
        You successfully withdrawn your overbid from the auction
        <br />
        You can check your transaction on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={blockexplorer.generateTransactionUrl(txHash)}
        >
          Etherscan
        </a>
        . <br />
        You are good to go!
      </MessageBlock>
    </Screen>
  )
}
