import { useState, useEffect } from "react"
import * as auctionWeb3 from "../web3"
import { AuctionState } from "../web3"
import { fetchBalance } from "../../../common/web3"

export const BidderState = {
  LOADING: "loading",
  NOT_STARTED: "notStarted",
  READY_TO_WITHDRAW: "readyToWithdraw",
  NOTHING_TO_WITHDRAW: "nothingToWithdraw",
  WAITING_DEPOSIT: "waitingDeposit",
  NOT_WHITELISTED: "notWhitelisted",
  NO_ALLOWANCE: "noAllowance",
  WRONG_ALLOWANCE: "wrongAllowance",
  NOT_ENOUGH_TOKENS: "notEnoughTokens",
  NO_ETH: "noETH",
  READY_TO_BID: "readyToBid",
  ALREADY_BID: "alreadyBid",
  ERROR: "error",
}

export function useBidderState(account) {
  const [bidderState, setBidderState] = useState(BidderState.LOADING)

  useEffect(() => {
    if (!account) {
      setBidderState(BidderState.LOADING)
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
          setBidderState(BidderState.LOADING)
          console.log("No account selected")
          return
        }
        const currentPrice = await auctionWeb3.fetchCurrentPrice()
        if (!currentPrice) {
          setBidderState(BidderState.LOADING)
          console.log("Current price not loaded")
          return
        }
        const auctionState = await auctionWeb3.fetchAuctionState()

        if (!(await auctionWeb3.isWhitelisted(account))) {
          setBidderState(BidderState.NOT_WHITELISTED)
        } else if (
          [AuctionState.ENDED, AuctionState.FAILED].includes(auctionState)
        ) {
          if ((await fetchBalance(account)) === "0") {
            setBidderState(BidderState.NO_ETH)
          } else if ((await auctionWeb3.fetchValueToWithdraw(account)).gt(0)) {
            setBidderState(BidderState.READY_TO_WITHDRAW)
          } else {
            setBidderState(BidderState.NOTHING_TO_WITHDRAW)
          }
        } else if (auctionState === AuctionState.DEPOSIT_PENDING) {
          setBidderState(BidderState.WAITING_DEPOSIT)
        } else if (await auctionWeb3.hasBid(account)) {
          setBidderState(BidderState.ALREADY_BID)
        } else if ((await fetchBalance(account)) === "0") {
          setBidderState(BidderState.NO_ETH)
        } else if ((await auctionWeb3.fetchAllowance(account)).eq(0)) {
          setBidderState(BidderState.NO_ALLOWANCE)
        } else if (
          (await auctionWeb3.fetchAllowance(account)).lt(currentPrice)
        ) {
          setBidderState(BidderState.WRONG_ALLOWANCE)
        } else if (auctionState === AuctionState.DEPLOYED) {
          setBidderState(BidderState.NOT_STARTED)
        } else if (
          (await auctionWeb3.fetchTokenBalance(account)).lt(currentPrice)
        ) {
          setBidderState(BidderState.NOT_ENOUGH_TOKENS)
        } else {
          setBidderState(BidderState.READY_TO_BID)
        }
      }

      env.chainCheckIntervalId = setInterval(checkState, 500)
      checkState()
    }

    startCheckState()
    return () => clearInterval(env.chainCheckIntervalId)
  }, [account])
  return bidderState
}
