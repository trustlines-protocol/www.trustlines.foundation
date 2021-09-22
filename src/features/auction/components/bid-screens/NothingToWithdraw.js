import React from "react";
import MessageBlock from "../bid-components/MessageBlock";
import AuctionLink from "../bid-components/AuctionLink";

export default function NothingToWithdraw() {
  return (
    <MessageBlock title="Nothing to withdraw">
      You do not have anything to withdraw from the{" "}
      <AuctionLink>Trustlines Validator Auction</AuctionLink>. <br />
      You are good to go!
    </MessageBlock>
  );
}
