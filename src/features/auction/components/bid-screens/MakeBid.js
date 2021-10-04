import React from "react";
import MessageBlock from "../bid-components/MessageBlock";
import ActionButton from "../bid-components/ActionButton";
import Screen from "./Screen";
import AuctionLink from "../bid-components/AuctionLink";
import CurrentPrice from "../current-price";

export default function MakeBid({ makeBid }) {
  return (
    <Screen faIcon="fa fa-arrow-circle-right" title="Make your bid">
      <MessageBlock>
        You can now make a bid in the{" "}
        <AuctionLink>Trustlines Validator Auction</AuctionLink>. <br />
        Current slot price is <CurrentPrice />.
      </MessageBlock>
      <ActionButton label="Place Bid" onClick={makeBid} />
    </Screen>
  );
}
