import React, { useCallback, useState } from "react"
import * as backend from "./api/backend"
import { requestPermission } from "../common/web3"
import * as web3 from "./api/web3"
import AddressInput from "./components/AddressInput"
import ClaimAmount from "./components/ClaimAmount"
import ClaimSuccess from "./components/ClaimSuccess"
import ClaimWait from "./components/ClaimWait"
import RetryButton from "./components/RetryButton"
import AddressDisplay from "./components/AddressDisplay"
import ClaimStart from "./components/ClaimStart"
import IntroParagraph from "./components/IntroParagraph"
import Error from "./components/Error"
import TermsAndConditionsModal from "./components/TermsAndConditionsModal"
import WaitCard from "./components/WaitCard"
import ClaimFailed from "./components/ClaimFailed"
import { useChainState } from "./state/chainState"
import ColumnsWrapper from "./components/ColumnsWrapper"
import ManualProofWrapper from "./components/ManualProofWrapper"

const STATE = {
  INPUT: "input",
  LOADING: "loading",
  SHOW_PROOF: "showProof",
  CLAIM_START: "startClaimTokens",
  CLAIM_WAIT: "waitClaimTokens",
  CLAIM_END: "endClaimTokens",
  NO_TOKENS: "noTokens",
  TRANSACTION_FAILED: "transactionFailed",
  ERROR: "error",
}

function ClaimFlow() {
  const [internalState, setInternalState] = useState(STATE.INPUT)
  const [address, setAddress] = useState("")
  const [proof, setProof] = useState([])
  const [currentAmount, setCurrentAmount] = useState("")
  const [amount, setAmount] = useState("")
  const chainState = useChainState()
  const [txHash, setTxHash] = useState("")
  const [confirmations, setConfirmations] = useState(0)
  const [errorMessage, setErrorMessage] = useState("")
  const [onAcceptTermsAndCondition, setOnAcceptTermsAndCondition] = useState(
    () => () => {}
  )
  const [
    handleDeclineTermsAndCondition,
    setOnDeclineTermsAndCondition,
  ] = useState(() => () => {})
  const [acceptedTermsAndCondition, setAcceptedTermsAndCondition] = useState(
    false
  )
  const [
    showTermsAndConditionsModal,
    setShowTermsAndConditionsModal,
  ] = useState(false)

  const handleSign = useCallback(hash => {
    setTxHash(hash)
    setInternalState(STATE.CLAIM_WAIT)
  }, [])

  const handleConfirmation = useCallback((confirmationNumber, receipt) => {
    // Workaround to access current hash
    setTxHash(currentHash => {
      // Only process incoming confirmations if it is about current transaction
      if (receipt.transactionHash === currentHash) {
        if (
          confirmationNumber === parseInt(process.env.REACT_APP_CONFIRMATIONS)
        ) {
          setInternalState(STATE.CLAIM_END)
        }
        setConfirmations(confirmationNumber)
      }
      return currentHash
    })
  }, [])

  const submit = useCallback(address => {
    setInternalState(STATE.LOADING)
    setAddress(address)
    backend
      .fetchTokenEntitlement(address)
      .then(data => {
        const { proof, currentTokenBalance, originalTokenBalance } = data

        // currentTokenBalance might be a string, to preserve precision
        if (currentTokenBalance.toString() === "0") {
          setInternalState(STATE.NO_TOKENS)
        } else {
          setProof(proof)
          setCurrentAmount(currentTokenBalance)
          setAmount(originalTokenBalance)
          setInternalState(STATE.SHOW_PROOF)
        }
      })
      .catch(error => {
        console.error(error)
        if (error.code === backend.SERVER_ERROR_CODE) {
          setErrorMessage(
            "Could not fetch token entitlement. There was an internal server error, please try again later."
          )
        } else {
          setErrorMessage(
            "Could not fetch token entitlement. The server is unreachable, please check your internet connection."
          )
        }
        setInternalState(STATE.ERROR)
      })
  }, [])

  const claim = useCallback(() => {
    setInternalState(STATE.CLAIM_START)
    requestPermission()
      .then(permission => {
        if (!permission) {
          setErrorMessage(
            "In order to claim your tokens you have to give this site permission to your wallet."
          )
          setInternalState(STATE.ERROR)
          return
        }
        return web3.claimTokens(
          address,
          amount,
          proof,
          handleSign,
          handleConfirmation
        )
      })
      .catch(error => {
        console.error(error)
        if (error.code === web3.TRANSACTION_REVERTED_ERROR_CODE) {
          setErrorMessage(
            "Your transaction have been reverted. Did you try to claim your tokens twice?"
          )
          setInternalState(STATE.TRANSACTION_FAILED)
        } else if (error.code === web3.USER_REJECTED_ERROR_CODE) {
          setInternalState(STATE.SHOW_PROOF)
        } else {
          setErrorMessage("Something went wrong with your transaction.")
          setInternalState(STATE.TRANSACTION_FAILED)
        }
      })
  }, [address, amount, proof, handleSign, handleConfirmation])

  const requestTermsAndConditionsAcceptance = useCallback(() => {
    return new Promise(resolve => {
      if (acceptedTermsAndCondition) {
        resolve(true)
      } else {
        // We need a function to return a function, as react treats functions special
        setOnAcceptTermsAndCondition(() => () => {
          setShowTermsAndConditionsModal(false)
          setAcceptedTermsAndCondition(true)
          resolve(true)
        })
        // We need a function to return a function, as react treats functions special
        setOnDeclineTermsAndCondition(() => () => {
          setShowTermsAndConditionsModal(false)
          resolve(false)
        })
        setShowTermsAndConditionsModal(true)
      }
    })
  }, [acceptedTermsAndCondition])

  const handelClaimRequest = useCallback(async () => {
    const acceptedTermsAndCondition = await requestTermsAndConditionsAcceptance()
    if (acceptedTermsAndCondition) {
      claim()
    }
  }, [claim, requestTermsAndConditionsAcceptance])

  const reset = useCallback(() => {
    setConfirmations(0)
    setErrorMessage("")
    setTxHash("")
    setInternalState(STATE.INPUT)
  }, [])

  const Headline = () => (
    <div className="has-text-left p-b-lg">
      <h1 className="title">Merkle Drop Token Claim</h1>
      <p className="has-text-justified has-text-grey">
        Using this website, you can check if any of your addresses are eligible
        to withdraw Trustlines Network Tokens (TLN), create the needed Merkle
        proof or claim your tokens directly via a web3 integration.
      </p>
    </div>
  )

  switch (internalState) {
    case STATE.INPUT:
      return (
        <div>
          <Headline />
          <ColumnsWrapper headline={"Check address eligibility"}>
            <AddressInput onSubmit={submit} chainState={chainState} autoFocus />
          </ColumnsWrapper>
          <IntroParagraph />
        </div>
      )
    case STATE.LOADING:
      return (
        <div>
          <Headline />
          <ColumnsWrapper headline={"Check address eligibility"}>
            <WaitCard title="Checking eligibility">
              Please do not close your browser.
              <br />
              This process may take up a few seconds.
            </WaitCard>
          </ColumnsWrapper>
          <IntroParagraph />
        </div>
      )
    case STATE.NO_TOKENS:
      return (
        <div>
          <Headline />
          <ColumnsWrapper headline={"Check address eligibility"}>
            <AddressDisplay address={address} />
            <div className="box has-text-centered">
              <h6 className="subtitle is-6 has-text-danger has-text-weight-semibold">
                <span className="icon is-medium has-text-danger">
                  <i className="fas fa-lg fa-exclamation-triangle" />
                </span>
                &nbsp;Sorry, this address is not eligible to claim any tokens.
              </h6>
            </div>
            <div className="columns is-centered">
              <div className="column is-three-fifths">
                <RetryButton reset={reset} />
              </div>
            </div>
          </ColumnsWrapper>
          <IntroParagraph />
        </div>
      )
    case STATE.SHOW_PROOF:
      return (
        <div>
          <Headline />
          <ColumnsWrapper headline={"Check address eligibility"}>
            <AddressDisplay address={address} />
          </ColumnsWrapper>
          <ColumnsWrapper>
            <ClaimAmount
              proof={proof}
              currentAmount={currentAmount}
              originalAmount={amount}
              onClaim={handelClaimRequest}
              reset={reset}
              chainState={chainState}
            />
            {showTermsAndConditionsModal && (
              <TermsAndConditionsModal
                onReject={handleDeclineTermsAndCondition}
                onAccept={onAcceptTermsAndCondition}
              />
            )}
          </ColumnsWrapper>
          <ManualProofWrapper
            proof={proof}
            amount={amount}
            requestTermsAndCondition={requestTermsAndConditionsAcceptance}
          />
        </div>
      )
    case STATE.CLAIM_START:
      return (
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <ClaimStart />
          </div>
        </div>
      )
    case STATE.CLAIM_WAIT:
      return (
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <ClaimWait txHash={txHash} />
          </div>
        </div>
      )
    case STATE.CLAIM_END:
      return (
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <ClaimSuccess txHash={txHash} confirmations={confirmations} />
            <div className="columns is-centered">
              <div className="column is-three-fifths">
                <RetryButton reset={reset} />
              </div>
            </div>
          </div>
        </div>
      )
    case STATE.ERROR:
      return (
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <Error errorMessage={errorMessage} reset={reset} />
          </div>
        </div>
      )
    case STATE.TRANSACTION_FAILED:
      return (
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <ClaimFailed
              reset={reset}
              errorMessage={errorMessage}
              txHash={txHash}
            />
          </div>
        </div>
      )
    default:
      console.error("Unexpectedly reached default branch.")
  }
}

export default ClaimFlow
