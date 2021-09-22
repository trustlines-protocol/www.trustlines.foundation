import React, { useState, useCallback } from "react";

import { useAccount } from "../../common/hooks/account";
import { useChainState, CHAIN_STATE } from "../../common/hooks/chain-state";
import { BidderState, useBidderState } from "../hooks/bidder";

import {
  getDefaultAccount,
  requestPermission,
  TRANSACTION_REVERTED_ERROR_CODE,
  USER_REJECTED_ERROR_CODE,
} from "../../common/api/web3";
import * as auctionWeb3 from "../api/web3";

import MainHeader from "./bid-components/MainHeader";
import MessageBlock from "./bid-components/MessageBlock";
import ActionButton from "./bid-components/ActionButton";
import Error from "./bid-components/Error";
import TLNLink from "./bid-components/TLNLink";

import CurrentPrice from "./current-price";
import AcceptTermsAndConditions from "./bid-screens/AcceptTermsAndConditions";
import ConnectWallet from "./bid-screens/ConnectWallet";
import MakeBid from "./bid-screens/MakeBid";
import NoAllowance from "./bid-screens/NoAllowance";
import WaitForConfirmation from "./bid-screens/WaitForConfirmation";
import SuccessfulBid from "./bid-screens/SuccessfulBid";
import TransactionError from "./bid-screens/TransactionError";
import AlreadyBid from "./bid-screens/AlreadyBid";
import NotStarted from "./bid-screens/NotStarted";
import WithdrawBid from "./bid-screens/WithdrawBid";
import SuccessfulWithdraw from "./bid-screens/SuccessfulWithdraw";
import NothingToWithdraw from "./bid-screens/NothingToWithdraw";
import DepositPending from "./bid-screens/DepositPending";
import Loading from "./bid-screens/Loading";

const MAX_UINT =
  "115792089237316195423570985008687907853269984665640564039457584007913129639935";

const STATE = {
  ACCEPT_TERMS_AND_CONDITION: "AcceptTermsAndConditionState",
  CONNECT_WALLET: "ConnectWalletState",
  READY_TO_TRANSACT_WITH_CONTRACT: "ReadyToTransactState",
  WAITING_FOR_TRANSACTION_CONFIRMATION: "WaitingForConfirmationState",
  WAITING_FOR_WEB3_BROWSER_ACTION: "WaitingForWeb3BrowserAction",
  SUCCESSFUL_BID: "SuccessfulBidState",
  SUCCESSFUL_WITHDRAW: "SuccessfulWithdrawState",
  ERROR: "ErrorState",
  TRANSACTION_ERROR: "TransactionErrorState",
};

export default function BidBox() {
  const web3Account = useAccount();
  const chainState = useChainState();
  const bidderState = useBidderState(web3Account);

  const [internalState, setInternalState] = useState(
    STATE.ACCEPT_TERMS_AND_CONDITION
  );
  const [paidSlotPrice, setPaidSlotPrice] = useState(0);

  const [txHash, setTxHash] = useState("");
  const [confirmations, setConfirmations] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const reset = useCallback(() => {
    setInternalState(STATE.ACCEPT_TERMS_AND_CONDITION);
  }, []);

  const showError = useCallback(
    (errorMessage, options = { state: STATE.ERROR }) => {
      setErrorMessage(errorMessage);
      setInternalState(options.state);
    },
    []
  );

  const setPaidSlotPriceByReceipt = useCallback(async receipt => {
    const paidSlotPrice = await auctionWeb3.getPaidSlotPriceByReceipt(receipt);
    setPaidSlotPrice(paidSlotPrice);
  }, []);

  const handleAcceptTermsAndCondition = useCallback(async () => {
    const account = await getDefaultAccount();
    if (account) {
      setInternalState(STATE.READY_TO_TRANSACT_WITH_CONTRACT);
    } else {
      setInternalState(STATE.CONNECT_WALLET);
    }
  }, []);

  const connect = useCallback(async () => {
    setInternalState(STATE.WAITING_FOR_WEB3_BROWSER_ACTION);
    const success = await requestPermission();
    if (success) {
      setInternalState(STATE.READY_TO_TRANSACT_WITH_CONTRACT);
    } else {
      setInternalState(STATE.CONNECT_WALLET);
    }
  }, []);

  const handleApproveConfirmation = useCallback(
    (confirmationNumber, receipt) => {
      // Workaround to access current hash
      setTxHash(currentHash => {
        // Only process incoming confirmations if it is about current transaction
        if (receipt.transactionHash === currentHash) {
          if (
            confirmationNumber === parseInt(process.env.REACT_APP_CONFIRMATIONS)
          ) {
            setInternalState(STATE.READY_TO_TRANSACT_WITH_CONTRACT);
          }
          setConfirmations(confirmationNumber);
        }
        return currentHash;
      });
    },
    [setTxHash, setInternalState]
  );

  const approve = useCallback(async () => {
    setInternalState(STATE.WAITING_FOR_WEB3_BROWSER_ACTION);
    try {
      // TODO only approve current auction price
      await auctionWeb3.approve(
        await getDefaultAccount(),
        MAX_UINT,
        hash => {
          setTxHash(hash);
          setInternalState(STATE.WAITING_FOR_TRANSACTION_CONFIRMATION);
        },
        handleApproveConfirmation
      );
    } catch (error) {
      console.error(error);
      if (error.code === TRANSACTION_REVERTED_ERROR_CODE) {
        showError("Your transaction has been reverted.", {
          state: STATE.TRANSACTION_ERROR,
        });
      } else if (error.code === USER_REJECTED_ERROR_CODE) {
        setInternalState(STATE.READY_TO_TRANSACT_WITH_CONTRACT);
        console.log("User rejected");
      } else {
        showError("Something went wrong.");
      }
    }
  }, [handleApproveConfirmation, showError]);

  const handleBidConfirmation = useCallback(
    (confirmationNumber, receipt) => {
      // Workaround to access current hash
      setTxHash(currentHash => {
        // Only process incoming confirmations if it is about current transaction
        if (receipt.transactionHash === currentHash) {
          if (
            confirmationNumber === parseInt(process.env.REACT_APP_CONFIRMATIONS)
          ) {
            setPaidSlotPriceByReceipt(receipt);
            setInternalState(STATE.SUCCESSFUL_BID);
          }
          setConfirmations(confirmationNumber);
        }
        return currentHash;
      });
    },
    [setPaidSlotPriceByReceipt]
  );

  const makeBid = useCallback(async () => {
    setInternalState(STATE.WAITING_FOR_WEB3_BROWSER_ACTION);
    try {
      await auctionWeb3.bid(
        await getDefaultAccount(),
        hash => {
          setTxHash(hash);
          setInternalState(STATE.WAITING_FOR_TRANSACTION_CONFIRMATION);
        },
        handleBidConfirmation
      );
    } catch (error) {
      console.error(error);
      if (error.code === TRANSACTION_REVERTED_ERROR_CODE) {
        showError("Your transaction has been reverted.", {
          state: STATE.TRANSACTION_ERROR,
        });
      } else if (error.code === USER_REJECTED_ERROR_CODE) {
        setInternalState(STATE.READY_TO_TRANSACT_WITH_CONTRACT);
        console.log("User rejected");
      } else {
        showError("Something went wrong.");
      }
    }
  }, [handleBidConfirmation, showError]);

  const handleWithdrawConfirmation = useCallback(
    (confirmationNumber, receipt) => {
      // Workaround to access current hash
      setTxHash(currentHash => {
        // Only process incoming confirmations if it is about current transaction
        if (receipt.transactionHash === currentHash) {
          if (
            confirmationNumber === parseInt(process.env.REACT_APP_CONFIRMATIONS)
          ) {
            setInternalState(STATE.SUCCESSFUL_WITHDRAW);
          }
          setConfirmations(confirmationNumber);
        }
        return currentHash;
      });
    },
    []
  );

  const withdraw = useCallback(async () => {
    setInternalState(STATE.WAITING_FOR_WEB3_BROWSER_ACTION);
    try {
      await auctionWeb3.withdraw(
        await getDefaultAccount(),
        hash => {
          setTxHash(hash);
          setInternalState(STATE.WAITING_FOR_TRANSACTION_CONFIRMATION);
        },
        handleWithdrawConfirmation
      );
    } catch (error) {
      console.error(error);
      if (error.code === TRANSACTION_REVERTED_ERROR_CODE) {
        showError("Your transaction has been reverted.", {
          state: STATE.TRANSACTION_ERROR,
        });
      } else if (error.code === USER_REJECTED_ERROR_CODE) {
        setInternalState(STATE.READY_TO_TRANSACT_WITH_CONTRACT);
        console.log("User rejected");
      } else {
        showError("Something went wrong.");
      }
    }
  }, [handleWithdrawConfirmation, showError]);

  switch (chainState) {
    case CHAIN_STATE.CONNECTING:
      return <Loading title="Connecting..." />;
    case CHAIN_STATE.DISCONNECTED:
      return (
        <div>
          <MainHeader
            faIcon="fa fa-exclamation-circle"
            text="No Web3 browser detected"
          />
          <MessageBlock>
            You can not participate directly from this website as no Web3
            browser was detected. To participate, install the MetaMask plugin,
            or use a Web3 enabled browser.
          </MessageBlock>
        </div>
      );
    case CHAIN_STATE.WRONG_CHAIN:
      return (
        <div>
          <MainHeader faIcon="fa fa-exclamation-circle" text="Wrong chain" />
          <MessageBlock>
            Please connect to the {process.env.REACT_APP_CHAIN_NAME}
          </MessageBlock>
        </div>
      );
    default:
  }

  if (internalState === STATE.READY_TO_TRANSACT_WITH_CONTRACT) {
    switch (bidderState) {
      case BidderState.LOADING:
        return <Loading title="Loading..." />;
      case BidderState.NO_ALLOWANCE:
        return <NoAllowance web3Account={web3Account} approve={approve} />;
      case BidderState.NOT_WHITELISTED:
        return (
          <Error title="Not whitelisted">
            The selected account {web3Account} is not whitelisted.
          </Error>
        );
      case BidderState.NOT_STARTED:
        return <NotStarted />;
      case BidderState.ENDED:
        return (
          <Error title="Auction ended">The auction has already ended.</Error>
        );
      case BidderState.WRONG_ALLOWANCE:
        return (
          <Error title="Too low allowance">
            The allowance for this account is lower than the current auction
            price. You will need to fix this manually, as this website can not
            handle this case.
          </Error>
        );
      case BidderState.NO_ETH:
        return (
          <Error title="Not enough funds">
            The currently selected account doesn't have enough funds to pay for
            transactions. You will need to increase the amount of ETH on the
            account to proceed.
          </Error>
        );
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
        );
      case BidderState.ALREADY_BID:
        return <AlreadyBid web3Account={web3Account} />;
      case BidderState.READY_TO_BID:
        return <MakeBid makeBid={makeBid} />;
      case BidderState.READY_TO_WITHDRAW:
        return <WithdrawBid withdraw={withdraw} account={web3Account} />;
      case BidderState.NOTHING_TO_WITHDRAW:
        return <NothingToWithdraw />;
      case BidderState.WAITING_DEPOSIT:
        return <DepositPending />;
      case BidderState.Error:
        return (
          <Error title="Something went wrong">
            We could not determine the current auction state.
          </Error>
        );
      default:
        console.error("Unexpectedly reached default case.");
        return <Error title="Something went wrong">Internal error</Error>;
    }
  }

  switch (internalState) {
    case STATE.ACCEPT_TERMS_AND_CONDITION:
      return (
        <AcceptTermsAndConditions onAccept={handleAcceptTermsAndCondition} />
      );
    case STATE.CONNECT_WALLET:
      return <ConnectWallet onConnect={connect} />;
    case STATE.WAITING_FOR_TRANSACTION_CONFIRMATION:
      return <WaitForConfirmation txHash={txHash} />;
    case STATE.WAITING_FOR_WEB3_BROWSER_ACTION:
      return (
        <div>
          <MessageBlock title="Waiting...">
            Please follow the instructions of your Web3 enabled browser.
          </MessageBlock>
        </div>
      );

    case STATE.SUCCESSFUL_BID:
      return <SuccessfulBid txHash={txHash} paidSlotPrice={paidSlotPrice} />;

    case STATE.SUCCESSFUL_WITHDRAW:
      return <SuccessfulWithdraw txHash={txHash} />;

    case STATE.ERROR:
      return (
        <div>
          <Error title="Something went wrong">{errorMessage}</Error>
          <ActionButton label="Try again" onClick={reset} />
        </div>
      );

    case STATE.TRANSACTION_ERROR:
      return (
        <TransactionError
          errorMessage={errorMessage}
          txHash={txHash}
          onTryAgain={reset}
        />
      );

    default:
      console.error("Unexpectedly reached default branch.");
      return <Error title="Something went wrong">Internal error</Error>;
  }
}
