import React from "react";
import MessageBlock from "../components/MessageBlock";
import Screen from "./Screen";

export default function DepositPending() {
  return (
    <Screen
      faIcon="fa fa-arrow-circle-right"
      title="Not ready to withdraw overbid yet"
    >
      <MessageBlock>
        The auction is ended, but the deposits are not yet locked.
        <br />
        Please wait a few minutes for the deposits to be safely locked before
        you can withdraw your overbid from the auction.
        <br />
      </MessageBlock>
    </Screen>
  );
}
