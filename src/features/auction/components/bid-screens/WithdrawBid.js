import React, { useEffect, useState } from "react";
import MessageBlock from "../bid-components/MessageBlock";
import ActionButton from "../bid-components/ActionButton";
import Screen from "./Screen";
import AuctionLink from "../bid-components/AuctionLink";
import { formatTLNAmount } from "../../../common/utils/math";
import * as auctionWeb3 from "../../api/web3";

export default function WithdrawBid({ withdraw, account }) {
  const [valueToWithdraw, setValueToWithdraw] = useState(undefined);
  useEffect(() => {
    async function fetchValueToWithdraw() {
      const value = await auctionWeb3.fetchValueToWithdraw(account);
      setValueToWithdraw(value);
    }
    fetchValueToWithdraw();
  }, [account]);

  return (
    <Screen faIcon="fa fa-arrow-circle-right" title="Withdraw from auction">
      <MessageBlock>
        You can withdraw your overbid from the{" "}
        <AuctionLink>Trustlines Validator Auction</AuctionLink>. <br />
        {valueToWithdraw
          ? "You have " +
            formatTLNAmount(valueToWithdraw.toString()) +
            " to withdraw"
          : ""}
      </MessageBlock>
      <ActionButton label="Withdraw" onClick={withdraw} />
    </Screen>
  );
}
