import React, { useState, useCallback } from "react"
import MainHeader from "./components/MainHeader"
import MessageBlock from "./components/MessageBlock"
import ActionButton from "./components/ActionButton"
import { useAccount } from "../../common/state/account"
import { useChainState, CHAIN_STATE } from "../../common/state/chainState"
import {
  getDefaultAccount,
  requestPermission,
  TRANSACTION_REVERTED_ERROR_CODE,
  USER_REJECTED_ERROR_CODE,
} from "../../common/web3"
import * as auctionWeb3 from "./web3"
import { BidderState, useBidderState } from "./state/bidderState"
import Error from "./components/Error"
import TLNLink from "./components/TLNLink"
import CurrentPrice from "./CurrentPrice"
import AcceptTermsAndConditions from "./screens/AcceptTermsAndConditions"
import ConnectWallet from "./screens/ConnectWallet"
import MakeBid from "./screens/MakeBid"
import NoAllowance from "./screens/NoAllowance"
import WaitForConfirmation from "./screens/WaitForConfirmation"
import SuccessfulBid from "./screens/SuccessfulBid"
import TransactionError from "./screens/TransactionError"

const MAX_UINT =
  "115792089237316195423570985008687907853269984665640564039457584007913129639935"

const STATE = {
  ACCEPT_TERMS_AND_CONDITION: "AcceptTermsAndConditionState",
  CONNECT_WALLET: "ConnectWalletState",
  WAITING_FOR_APPROVE_CONFIRMATION: "WaitingForApproveConfirmationState",
  MAKE_BID: "MakeBidState",
  WAITING_FOR_BID_CONFIRMATION: "WaitingForBidState",
  WAITING_FOR_WEB3_BROWSER_ACTION: "WaitingForWeb3BrowserAction",
  SUCCESSFUL_BID: "SuccessfulBidState",
  ERROR: "ErrorState",
  TRANSACTION_ERROR: "TransactionErrorState",
}

export default function BidBox() {
  const web3Account = useAccount()
  const chainState = useChainState()
  const bidderState = useBidderState(web3Account)

  const [internalState, setInternalState] = useState(
    STATE.ACCEPT_TERMS_AND_CONDITION
  )
  const [paidSlotPrice, setPaidSlotPrice] = useState(0)

  const [txHash, setTxHash] = useState("")
  const [confirmations, setConfirmations] = useState(0)
  const [errorMessage, setErrorMessage] = useState("")

  const reset = useCallback(() => {
    setInternalState(STATE.ACCEPT_TERMS_AND_CONDITION)
  }, [])

  const showError = useCallback(
    (errorMessage, options = { state: STATE.ERROR }) => {
      setErrorMessage(errorMessage)
      setInternalState(options.state)
    },
    []
  )

  const setPaidSlotPriceByReceipt = useCallback(async receipt => {
    const paidSlotPrice = await auctionWeb3.getPaidSlotPriceByReceipt(receipt)
    setPaidSlotPrice(paidSlotPrice)
  }, [])

  const handleAcceptTermsAndCondition = useCallback(async () => {
    const account = await getDefaultAccount()
    if (account) {
      setInternalState(STATE.MAKE_BID)
    } else {
      setInternalState(STATE.CONNECT_WALLET)
    }
  }, [])

  const connect = useCallback(async () => {
    setInternalState(STATE.WAITING_FOR_WEB3_BROWSER_ACTION)
    const success = await requestPermission()
    if (success) {
      setInternalState(STATE.MAKE_BID)
    } else {
      setInternalState(STATE.CONNECT_WALLET)
    }
  }, [])

  const handleApproveConfirmation = useCallback(
    (confirmationNumber, receipt) => {
      // Workaround to access current hash
      setTxHash(currentHash => {
        // Only process incoming confirmations if it is about current transaction
        if (receipt.transactionHash === currentHash) {
          if (
            confirmationNumber === parseInt(process.env.REACT_APP_CONFIRMATIONS)
          ) {
            setInternalState(STATE.MAKE_BID)
          }
          setConfirmations(confirmationNumber)
        }
        return currentHash
      })
    },
    [setTxHash, setInternalState]
  )

  const approve = useCallback(async () => {
    setInternalState(STATE.WAITING_FOR_WEB3_BROWSER_ACTION)
    try {
      // TODO only approve current auction price
      await auctionWeb3.approve(
        await getDefaultAccount(),
        MAX_UINT,
        hash => {
          setTxHash(hash)
          setInternalState(STATE.WAITING_FOR_APPROVE_CONFIRMATION)
        },
        handleApproveConfirmation
      )
    } catch (error) {
      console.error(error)
      if (error.code === TRANSACTION_REVERTED_ERROR_CODE) {
        showError("Your transaction has been reverted.", {
          state: STATE.TRANSACTION_ERROR,
        })
      } else if (error.code === USER_REJECTED_ERROR_CODE) {
        setInternalState(STATE.MAKE_BID)
        console.log("User rejected")
      } else {
        showError("Something went wrong.")
      }
    }
  }, [handleApproveConfirmation, showError])

  const handleBidConfirmation = useCallback(
    (confirmationNumber, receipt) => {
      // Workaround to access current hash
      setTxHash(currentHash => {
        // Only process incoming confirmations if it is about current transaction
        if (receipt.transactionHash === currentHash) {
          if (
            confirmationNumber === parseInt(process.env.REACT_APP_CONFIRMATIONS)
          ) {
            setPaidSlotPriceByReceipt(receipt)
            setInternalState(STATE.SUCCESSFUL_BID)
          }
          setConfirmations(confirmationNumber)
        }
        return currentHash
      })
    },
    [setPaidSlotPriceByReceipt]
  )

  const makeBid = useCallback(async () => {
    setInternalState(STATE.WAITING_FOR_WEB3_BROWSER_ACTION)
    try {
      await auctionWeb3.bid(
        await getDefaultAccount(),
        hash => {
          setTxHash(hash)
          setInternalState(STATE.WAITING_FOR_BID_CONFIRMATION)
        },
        handleBidConfirmation
      )
    } catch (error) {
      console.error(error)
      if (error.code === TRANSACTION_REVERTED_ERROR_CODE) {
        showError("Your transaction has been reverted.", {
          state: STATE.TRANSACTION_ERROR,
        })
      } else if (error.code === USER_REJECTED_ERROR_CODE) {
        setInternalState(STATE.MAKE_BID)
        console.log("User rejected")
      } else {
        showError("Something went wrong.")
      }
    }
  }, [handleBidConfirmation, showError])

  switch (chainState) {
    case CHAIN_STATE.CONNECTING:
      return (
        <div>
          <MainHeader text="Connecting..." />
          <MessageBlock />
        </div>
      )
    case CHAIN_STATE.DISCONNECTED:
      return (
        <div>
          <MainHeader
            faIcon="fa fa-exclamation-circle"
            text="No Web3 browser detected"
          />
          <MessageBlock>
            You can not participate directly on this website as no Web3 browser
            was detected. In order to participate please install the Metamask
            plugin, or browse this website with a Web3 enabled browser.
          </MessageBlock>
        </div>
      )
    case CHAIN_STATE.WRONG_CHAIN:
      return (
        <div>
          <MainHeader faIcon="fa fa-exclamation-circle" text="Wrong chain" />
          <MessageBlock>
            Please connect to the {process.env.REACT_APP_CHAIN_NAME}
          </MessageBlock>
        </div>
      )
    default:
  }

  if (internalState === STATE.MAKE_BID) {
    switch (bidderState) {
      case BidderState.LOADING:
        return (
          <div>
            <MainHeader faIcon="fa fa-spinner fa-pulse" text="Loading..." />
            <MessageBlock />
          </div>
        )
      case BidderState.NO_ALLOWANCE:
        return <NoAllowance web3Account={web3Account} approve={approve} />
      case BidderState.NOT_WHITELISTED:
        return (
          <Error title="Not whitelisted">
            The selected account {web3Account} is not whitelisted.
          </Error>
        )
      case BidderState.NOT_STARTED:
        return (
          <Error title="Auction has not started">
            Please be a little more patient, the auction has not started yet.
          </Error>
        )
      case BidderState.ENDED:
        return (
          <Error title="Auction ended">The auction has already ended.</Error>
        )
      case BidderState.WRONG_ALLOWANCE:
        return (
          <Error title="Too low allowance">
            The allowance for this account is lower than the current auction
            price. You will need to fix this manually, as this website can not
            handle this case.
          </Error>
        )
      case BidderState.NO_ETH:
        return (
          <Error title="Not enough funds">
            The currently selected account doesn't have enough funds to pay for
            transactions. You will need to increase the amount of ETH on the
            account to proceed.
          </Error>
        )
      case BidderState.NOT_ENOUGH_TOKENS:
        return (
          <Error title="Not enough TLN">
            The currently selected account doesn't have enough{" "}
            <TLNLink>TLN</TLNLink> to bid at the current price of{" "}
            <CurrentPrice />. To proceed, you will need more TLN on the account
            to bid at the current rate. You can also wait for the price of the
            auction to go down and bid at a lower price. The minimum bid price
            is 5,000 TLN.
          </Error>
        )
      case BidderState.ALREADY_BID:
        return (
          <Error title="Already bid">
            The selected account {web3Account} has already bid in the auction.
            You can only bid once in the auction.
          </Error>
        )
      case BidderState.READY_TO_BID:
        //Nothing to do
        break
      case BidderState.Error:
        return (
          <Error title="Something went wrong">
            We could not determine the current auction state.
          </Error>
        )
      default:
        console.error("Unexpectedly reached default case.")
        return <Error title="Something went wrong">Internal error</Error>
    }
  }

  switch (internalState) {
    case STATE.ACCEPT_TERMS_AND_CONDITION:
      return (
        <AcceptTermsAndConditions onAccept={handleAcceptTermsAndCondition} />
      )
    case STATE.CONNECT_WALLET:
      return <ConnectWallet onConnect={connect} />
    case STATE.MAKE_BID:
      return <MakeBid makeBid={makeBid} />
    case STATE.WAITING_FOR_APPROVE_CONFIRMATION:
    case STATE.WAITING_FOR_BID_CONFIRMATION:
      return <WaitForConfirmation txHash={txHash} />
    case STATE.WAITING_FOR_WEB3_BROWSER_ACTION:
      return (
        <div>
          <MainHeader faIcon="fa fa-spinner fa-pulse" text="Waiting..." />
          <MessageBlock>
            Please follow the instructions of your Web3 enabled browser.
          </MessageBlock>
        </div>
      )

    case STATE.SUCCESSFUL_BID:
      return <SuccessfulBid txHash={txHash} paidSlotPrice={paidSlotPrice} />

    case STATE.ERROR:
      return (
        <div>
          <Error title="Something went wrong">{errorMessage}</Error>
          <ActionButton label="Try again" onClick={reset} />
        </div>
      )

    case STATE.TRANSACTION_ERROR:
      return (
        <TransactionError
          errorMessage={errorMessage}
          txHash={txHash}
          onTryAgain={reset}
        />
      )

    default:
      console.error("Unexpectedly reached default branch.")
      return <Error title="Something went wrong">Internal error</Error>
  }
}
