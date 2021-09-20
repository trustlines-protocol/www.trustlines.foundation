import React, { useEffect, useState } from "react";
import { formatTLNAmount } from "../../common/utils/math";
import Error from "../components/Error";
import * as auctionWeb3 from "../web3";

export default function AlreadyBid({ web3Account }) {
  const [paidSlotPrice, setPaidSlotPrice] = useState(0);

  useEffect(() => {
    async function fetchPaidSlotPrice() {
      const paidSlotPrice = await auctionWeb3.getPaidSlotPriceByAddress(
        web3Account
      );
      setPaidSlotPrice(paidSlotPrice);
    }
    fetchPaidSlotPrice();
  }, [web3Account]);

  return (
    <Error title="Already bid">
      The selected account {web3Account} has already bid{" "}
      {formatTLNAmount(paidSlotPrice)}. You can only bid once in the auction.
    </Error>
  );
}
