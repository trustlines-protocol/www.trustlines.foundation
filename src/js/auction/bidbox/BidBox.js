import React, { useState, useCallback } from "react"
import MainHeader from "./components/MainHeader"
import MessageBlock from "./components/MessageBlock"
import ActionButton from "./components/ActionButton"
import TermsAndConditionsModal from "../../common/components/TermsAndConditionsModal"
import { useAccount } from "../../common/state/account"
import { useChainState, CHAIN_STATE } from "../../common/state/chainState"
import {
  getDefaultAccount,
  requestPermission,
  TRANSACTION_REVERTED_ERROR_CODE,
  USER_REJECTED_ERROR_CODE,
} from "../../common/web3"
import * as auctionWeb3 from "./web3"
import * as blockexplorer from "../../common/blockexplorer"
import { formatTLNAmount } from "../../common/math"
import { BidderState, useBidderState } from "./state/bidderState"
import Error from "./components/Error"
import TLNLink from "./components/TLNLink"
import AuctionLink from "./components/AuctionLink"
import CurrentPrice from "./CurrentPrice"

const MAX_UINT =
  "115792089237316195423570985008687907853269984665640564039457584007913129639935"

const STATE = {
  PARTICIPATE_IN_AUCTION: "ParticipateInAuctionState",
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
  const bidderState = useBidderState(web3Account, currentPrice)

  const [internalState, setInternalState] = useState(
    STATE.PARTICIPATE_IN_AUCTION
  )
  const [paidSlotPrice, setPaidSlotPrice] = useState(0)
  const [isVisibleTermsAndCondition, setIsVisibleTermsAndCondition] = useState(
    false
  )

  const [txHash, setTxHash] = useState("")
  const [confirmations, setConfirmations] = useState(0)
  const [errorMessage, setErrorMessage] = useState("")

  const showError = (errorMessage, options = { state: STATE.ERROR }) => {
    setErrorMessage(errorMessage)
    setInternalState(options.state)
  }

  const showTermsAndConditionsModal = useCallback(
    () => setIsVisibleTermsAndCondition(true),
    []
  )

  const setPaidSlotPriceByReceipt = useCallback(async receipt => {
    const paidSlotPrice = await auctionWeb3.getPaidSlotPriceByReceipt(receipt)
    setPaidSlotPrice(paidSlotPrice)
  }, [])

  const handleAcceptTermsAndCondition = useCallback(async () => {
    setIsVisibleTermsAndCondition(false)
    const account = await getDefaultAccount()
    if (account) {
      setInternalState(STATE.MAKE_BID)
    } else {
      setInternalState(STATE.CONNECT_WALLET)
    }
  }, [])

  const handleRejectTermsAndCondition = useCallback(
    () => setIsVisibleTermsAndCondition(false),
    []
  )

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
        showError("Something went wrong with your transaction.", {
          state: STATE.TRANSACTION_ERROR,
        })
      }
    }
  }, [handleApproveConfirmation])

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
        showError("Something went wrong with your transaction.", {
          state: STATE.TRANSACTION_ERROR,
        })
      }
    }
  }, [handleBidConfirmation])

  switch (chainState) {
    case CHAIN_STATE.CONNECTING:
      return (
        <div>
          <div className="column">
            <MainHeader text="Connecting..." />
          </div>
          <div className="column">
            <MessageBlock />
          </div>
        </div>
      )
    case CHAIN_STATE.DISCONNECTED:
      return (
        <div>
          <div className="column">
            <MainHeader
              faIcon="fa fa-exclamation-circle"
              text="Participate in auction"
            />
          </div>
          <div className="column">
            <MessageBlock>
              You can not participate directly on this website as no Web3
              browser was detected. In order to participate please install the
              Metamask plugin, or browse this website with a Web3 enabled
              browser.
            </MessageBlock>
          </div>
        </div>
      )
    case CHAIN_STATE.WRONG_CHAIN:
      return (
        <div>
          <div className="column">
            <MainHeader faIcon="fa fa-exclamation-circle" text="Wrong chain" />
          </div>
          <div className="column">
            <MessageBlock>
              Please connect to the {process.env.REACT_APP_CHAIN_NAME}
            </MessageBlock>
          </div>
        </div>
      )
    default:
  }

  if (internalState === STATE.MAKE_BID) {
    switch (bidderState) {
      case BidderState.LOADING:
        return (
          <div>
            <div className="column">
              <MainHeader faIcon="fa fa-spinner fa-pulse" text="Loading..." />
            </div>
            <div className="column">
              <MessageBlock />
            </div>
          </div>
        )
      case BidderState.NO_ALLOWANCE:
        return (
          <div>
            <div className="column">
              <MainHeader
                faIcon="fa fa-arrow-circle-right"
                text="Approve Transfer"
              />
            </div>
            <div className="column">
              <MessageBlock>
                In order to proceed, please approve the transfer of{" "}
                <TLNLink>TLN</TLNLink> by the auction contract for {web3Account}
                .
              </MessageBlock>
            </div>
            <div className="column">
              <ActionButton label="Approve" onClick={approve} />
            </div>
          </div>
        )
      case BidderState.NOT_WHITELISTED:
        return (
          <Error title="Not whitelisted">
            The selected account {web3Account} is not whitelisted.
          </Error>
        )
      case BidderState.WRONG_ALLOWANCE:
        return (
          <Error title="Too low allowance">
            The allowance for this account is lower than the current auction
            price. Please manually fix this as this website can not handle this
            case.
          </Error>
        )
      case BidderState.NO_ETH:
        return (
          <Error title="Not enough funds">
            It seems that the current selected account has no funds to pay for
            transactions. You will need to send ETH to the selected account to
            proceed.
          </Error>
        )
      case BidderState.NOT_ENOUGH_TOKENS:
        return (
          <Error title="Not enough TLN">
            It seems that the current selected account does not have enough TLN
            to bid at the current price. In order to proceed send{" "}
            <TLNLink>TLN</TLNLink> to the current selected account.
          </Error>
        )
      case BidderState.ALREADY_BID:
        return (
          <Error title="Already bid">
            The selected account {web3Account} has already bid.
          </Error>
        )
      case BidderState.READY_TO_BID:
        //Nothing to do
        break
      case BidderState.Error:
        return (
          <Error title="Something went wrong">
            We could not determine the current auction state
          </Error>
        )
      default:
        console.error("Unexpectedly reached default case.")
        return <Error title="Something went wrong">Internal error</Error>
    }
  }

  switch (internalState) {
    case STATE.PARTICIPATE_IN_AUCTION:
      return (
        <div>
          <div className="column">
            <MainHeader
              faIcon="fa fa-arrow-circle-right"
              text="Participate in auction"
            />
          </div>
          <div className="column">
            <MessageBlock>
              In order to begin with your participation, please read and accept
              our terms and conditions.
            </MessageBlock>
          </div>
          <div className="column">
            <ActionButton
              label="Terms & Conditions"
              onClick={showTermsAndConditionsModal}
            />
          </div>
          {isVisibleTermsAndCondition && (
            <TermsAndConditionsModal
              onReject={handleRejectTermsAndCondition}
              onAccept={handleAcceptTermsAndCondition}
            >
              Do you want to buy this washing machine
              <br />
              Do you?
            </TermsAndConditionsModal>
          )}
        </div>
      )

    case STATE.CONNECT_WALLET:
      return (
        <div>
          <div className="column">
            <MainHeader
              faIcon="fa fa-arrow-circle-right"
              text="Connect wallet"
            />
          </div>
          <div className="column">
            <MessageBlock>
              In order to proceed, please allow to connect to your wallet.
            </MessageBlock>
          </div>
          <div className="column">
            <ActionButton label="Connect" onClick={connect} />
          </div>
        </div>
      )
    case STATE.MAKE_BID:
      return (
        <div>
          <div className="column">
            <MainHeader
              faIcon="fa fa-arrow-circle-right"
              text="Make your bid"
            />
          </div>
          <div className="column">
            <MessageBlock>
              You can now make a bid in the{" "}
              <AuctionLink>Trustlines Validator Auction</AuctionLink>. <br />
              Current slot price is <CurrentPrice />.
            </MessageBlock>
          </div>
          <div className="column">
            <ActionButton label="Place Bid" onClick={makeBid} />
          </div>
        </div>
      )

    case STATE.WAITING_FOR_APPROVE_CONFIRMATION:
    case STATE.WAITING_FOR_BID_CONFIRMATION:
      return (
        <div>
          <div className="column">
            <MainHeader
              faIcon="fa fa-spinner fa-pulse"
              text="Waiting for confirmation..."
            />
          </div>
          <div className="column">
            <MessageBlock>
              Your transaction has been sent and we are waiting for
              confirmation.
              <br />
              Check status on{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={blockexplorer.generateTransactionUrl(txHash)}
              >
                Etherscan
              </a>
              .
            </MessageBlock>
          </div>
        </div>
      )
    case STATE.WAITING_FOR_WEB3_BROWSER_ACTION:
      return (
        <div>
          <div className="column">
            <MainHeader faIcon="fa fa-spinner fa-pulse" text="Waiting..." />
          </div>
          <div className="column">
            <MessageBlock>
              Please follow the instructions of your Web3 enabled browser.
            </MessageBlock>
          </div>
        </div>
      )

    case STATE.SUCCESSFUL_BID:
      return (
        <div>
          <div className="column">
            <MainHeader
              faIcon="fa fa-check-circle"
              text="You have successfully made your bid"
            />
          </div>
          <div className="column">
            <MessageBlock>
              {`Paid slot price: ${formatTLNAmount(paidSlotPrice)}`}
              <br />
              You can check your transaction on{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={blockexplorer.generateTransactionUrl(txHash)}
              >
                Etherscan
              </a>
              .
            </MessageBlock>
          </div>
        </div>
      )

    case STATE.ERROR:
      return (
        <div>
          <div className="column">
            <MainHeader
              faIcon="fa fa-exclamation-circle"
              text="Something went wrong"
            />
          </div>
          <div className="column">
            <MessageBlock>{errorMessage}</MessageBlock>
          </div>
          <div className="column">
            <ActionButton
              label="Try again"
              onClick={() => {
                setInternalState(STATE.PARTICIPATE_IN_AUCTION)
              }}
            />
          </div>
        </div>
      )

    case STATE.TRANSACTION_ERROR:
      return (
        <div>
          <div className="column">
            <MainHeader
              faIcon="fa fa-exclamation-circle"
              text="Something went wrong"
            />
          </div>
          <div className="column">
            <MessageBlock>
              {errorMessage} <br />
              Check what went wrong on{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={blockexplorer.generateTransactionUrl(txHash)}
              >
                Etherscan
              </a>
              .
            </MessageBlock>
          </div>
          <div className="column">
            <ActionButton
              label="Try again"
              onClick={() => {
                setInternalState(STATE.PARTICIPATE_IN_AUCTION)
              }}
            />
          </div>
        </div>
      )

    default:
      console.error("Unexpectedly reached default branch.")
      return <Error title="Something went wrong">Internal error</Error>
  }
}
