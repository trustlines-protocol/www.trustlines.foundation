import { useState, useEffect } from "react";

import * as auctionWeb3 from "../../../js/auction/bidbox/web3";

export function useCurrentPrice() {
  const [currentPrice, setCurrentPrice] = useState(null);

  useEffect(() => {
    // box variable to make it available in inner function
    const env = {
      intervalId: 0,
    };

    // define async function because effect function can not be async
    async function periodicallyFetchCurrentPrice() {
      async function fetchPrice() {
        setCurrentPrice(await auctionWeb3.fetchCurrentPrice());
      }

      env.intervalId = setInterval(fetchPrice, 10000);
      fetchPrice();
    }
    periodicallyFetchCurrentPrice();
    return () => clearInterval(env.intervalId);
  }, []);
  return currentPrice;
}
