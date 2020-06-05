import React from "react"
import MessageBlock from "../components/MessageBlock"
import ActionButton from "../components/ActionButton"
import Screen from "./Screen"
import AuctionLink from "../components/AuctionLink"
import CurrentPrice from "../CurrentPrice"

export default function MakeBid({ makeBid }) {
  return (
    <Screen faIcon="fa fa-arrow-circle-right" title="Make your bid">
      <MessageBlock>
        You can now make a bid in the {" "}
        <AuctionLink>Trustlines Validator Auction</AuctionLink>. <br />
        Current slot price is <CurrentPrice />.
      </MessageBlock>
      <ActionButton label="Place Bid" onClick={makeBid} />
    </Screen>
  )
}
