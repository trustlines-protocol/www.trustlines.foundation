import { useState, useEffect } from "react"
import * as auctionWeb3 from "../web3"

export const BidderState = {
  LOADING: "loading",
  NOT_WHITELISTED: "notWhitelisted",
  NO_ALLOWANCE: "noAllowance",
  WRONG_ALLOWANCE: "wrongAllowance",
  READY_TO_BID: "readyToBid",
  ALREADY_BID: "alreadyBid",
  ERROR: "error",
}

export function useBidderState(account, currentPrice) {
  const [auctionState, setAuctionState] = useState(BidderState.LOADING)

  useEffect(() => {
    if (!account) {
      setAuctionState(BidderState.LOADING)
      console.log("No account selected")
      return
    }

    // box variable to make it available in inner function
    const env = {
      intervalId: 0,
    }

    // define async function because effect function can not be async
    async function startCheckState() {
      async function checkState() {
        if (!account) {
          setAuctionState(BidderState.LOADING)
          console.log("No account selected")
          return
        }
        if (!(await auctionWeb3.isWhitelisted(account))) {
          setAuctionState(BidderState.NOT_WHITELISTED)
        } else if ((await auctionWeb3.fetchAllowance(account)).eq(0)) {
          setAuctionState(BidderState.NO_ALLOWANCE)
        } else if (
          (await auctionWeb3.fetchAllowance(account)).lt(currentPrice)
        ) {
          setAuctionState(BidderState.WRONG_ALLOWANCE)
        } else if (await auctionWeb3.hasBid(account)) {
          setAuctionState(BidderState.ALREADY_BID)
        } else {
          setAuctionState(BidderState.READY_TO_BID)
        }
      }

      env.chainCheckIntervalId = setInterval(checkState, 500)
      checkState()
    }

    startCheckState()
    return () => clearInterval(env.chainCheckIntervalId)
  }, [account, currentPrice])
  return auctionState
}
