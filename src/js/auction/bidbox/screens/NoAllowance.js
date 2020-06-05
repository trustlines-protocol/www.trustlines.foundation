import React from "react"
import MessageBlock from "../components/MessageBlock"
import ActionButton from "../components/ActionButton"
import Screen from "./Screen"
import TLNLink from "../components/TLNLink"

export default function NoAllowance({ web3Account, approve }) {
  return (
    <Screen faIcon="fa fa-arrow-circle-right" title="Approve Transfer">
      <MessageBlock>
        In order to proceed, please approve the transfer of{" "}
        <TLNLink>TLN</TLNLink> by the auction contract for {web3Account}.
      </MessageBlock>
      <ActionButton label="Approve" onClick={approve} />
    </Screen>
  )
}
