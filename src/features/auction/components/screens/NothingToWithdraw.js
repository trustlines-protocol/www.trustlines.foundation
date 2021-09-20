import React from "react";
import MessageBlock from "../components/MessageBlock";
import Screen from "./Screen";
import AuctionLink from "../components/AuctionLink";

export default function NothingToWithdraw() {
  return (
    <Screen faIcon="fa fa-arrow-circle-right" title="Nothing to withdraw">
      <MessageBlock>
        You do not have anything to withdraw from the{" "}
        <AuctionLink>Trustlines Validator Auction</AuctionLink>. <br />
        You are good to go!
      </MessageBlock>
    </Screen>
  );
}
