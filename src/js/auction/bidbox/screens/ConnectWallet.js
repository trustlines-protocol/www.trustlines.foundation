import React from "react"
import MessageBlock from "../components/MessageBlock"
import ActionButton from "../components/ActionButton"
import Screen from "./Screen"

export default function ConnectWallet({ onConnect }) {
  return (
    <Screen faIcon="fa fa-arrow-circle-right" title="Connect Wallet">
      <MessageBlock>
        In order to proceed, please allow to connect to your wallet.
      </MessageBlock>
      <ActionButton label="Connect" onClick={onConnect} />
    </Screen>
  )
}
