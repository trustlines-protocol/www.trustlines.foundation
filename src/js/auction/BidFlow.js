import React, { useState, useCallback } from "react"
import MainHeader from "./components/MainHeader"
import MessageBlock from "./components/MessageBlock"
import ActionButton from "./components/ActionButton"

const STATE = {
  SHOW_PARTICIPATE_IN_AUCTION: "showParticipateInAuction",
  SHOW_APPROVE_WITHDRAWL: "showApproveWithdrawl",
  SHOW_MAKE_BID: "showMakeBid",
  SHOW_WAITING_FOR_CONFIRMATION: "showWaitingForConfirmation",
  SHOW_SUCCESSFUL_BID: "showSuccessfulBid",
}

export default function BidFlow() {
  const [internalState, setInternalState] = useState(
    STATE.SHOW_PARTICIPATE_IN_AUCTION
  )
  const [paidSlotPrice, setPaidSlotPrice] = useState(0.0)

  const acceptTermsAndCondition = useCallback(
    () => setInternalState(STATE.SHOW_APPROVE_WITHDRAWL),
    [setInternalState]
  )

  const approve = useCallback(async () => {
    setInternalState(STATE.SHOW_WAITING_FOR_CONFIRMATION)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setInternalState(STATE.SHOW_MAKE_BID)
  }, [setInternalState])

  const makeBid = useCallback(async () => {
    setInternalState(STATE.SHOW_WAITING_FOR_CONFIRMATION)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setPaidSlotPrice(73.9)
    setInternalState(STATE.SHOW_SUCCESSFUL_BID)
  }, [setInternalState])

  switch (internalState) {
    case STATE.SHOW_PARTICIPATE_IN_AUCTION:
      return (
        <div>
          <div className="column">
            <MainHeader text="Participate in auction" />
          </div>
          <div className="column">
            <MessageBlock content="In order to begin with your participation, please read our terms and conditions." />
          </div>
          <div className="column">
            <ActionButton
              label="Terms & Conditions"
              onClick={acceptTermsAndCondition}
            />
          </div>
        </div>
      )

    case STATE.SHOW_APPROVE_WITHDRAWL:
      return (
        <div>
          <div className="column">
            <MainHeader text="Approve Withdrawl" />
          </div>
          <div className="column">
            <MessageBlock content="In order to proceed, please approve the withdraw of TLN by the auction contract." />
          </div>
          <div className="column">
            <ActionButton label="Approve TLN" onClick={approve} />
          </div>
        </div>
      )

    case STATE.SHOW_MAKE_BID:
      return (
        <div>
          <div className="column">
            <MainHeader text="Make your bid" />
          </div>
          <div className="column">
            <MessageBlock content="You can now make a bid in the Trustlines Validator Auction" />
          </div>
          <div className="column">
            <ActionButton label="Place Bid" onClick={makeBid} />
          </div>
        </div>
      )

    case STATE.SHOW_WAITING_FOR_CONFIRMATION:
      return (
        <div>
          <div className="column">
            <MainHeader icon="fa fa-spinner" text="Wait for confirmations" />
          </div>
          <div className="column">
            <div className="spinner-wrapper">
              <div className="spinner" />
            </div>
          </div>
        </div>
      )

    case STATE.SHOW_SUCCESSFUL_BID:
      return (
        <div>
          <div className="column">
            <MainHeader
              icon="fa fa-check-circle"
              text="You have successfully made your bid"
            />
          </div>
          <div className="column">
            <MessageBlock content={"Paid slot price: " + paidSlotPrice} />
          </div>
        </div>
      )

    default:
      console.error("Unexpectedly reached default branch.")
  }
}
