import React from "react"
import MessageBlock from "../components/MessageBlock"
import ActionButton from "../components/ActionButton"
import Screen from "./Screen"
import TLNLink from "../components/TLNLink"
import AuctionLink from "../components/AuctionLink"

export default function NoAllowance({ web3Account, approve }) {
  return (
    <Screen faIcon="fa fa-arrow-circle-right" title="Approve Transfer">
      <MessageBlock>
        To proceed, you must approve the transfer of{" "}
        <TLNLink>Trustlines Network Tokens</TLNLink> on your behalf by the{" "}
        <AuctionLink>auction contract</AuctionLink>. You are currently using the
        address {web3Account} to approve the transfer.
      </MessageBlock>
      <ActionButton label="Approve" onClick={approve} />
    </Screen>
  )
}
