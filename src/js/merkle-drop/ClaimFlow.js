import React, { useCallback, useState } from "react"
import * as backend from "./api/backend"
import {
  getDefaultAccount,
  requestPermission,
  sameAddress,
  verifyChainId,
} from "../common/web3"
import * as web3 from "./api/web3"
import AddressInput from "./components/AddressInput"
import ClaimAmount from "./components/ClaimAmount"
import ClaimSuccess from "./components/ClaimSuccess"
import ClaimWait from "./components/ClaimWait"
import RetryButton from "./components/RetryButton"
import AddressDisplay from "./components/AddressDisplay"
import ClaimStart from "./components/ClaimStart"
import Error from "./components/Error"
import TermsAndConditionsModal from "./components/TermsAndConditionsModal"
import WaitCard from "./components/WaitCard"
import ClaimFailed from "./components/ClaimFailed"
import { useChainState } from "../common/state/chainState"
import ColumnsWrapper from "./components/ColumnsWrapper"
import ManualProofWrapper from "./components/ManualProofWrapper"
import { useAccount } from "../common/state/account"
import Warning from "./components/Warning"

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
  const [claimAddress, setClaimAddress] = useState("")
  const [proof, setProof] = useState([])
  const [currentClaimAmount, setCurrentClaimAmount] = useState("")
  const [originalClaimAmount, setOriginalClaimAmount] = useState("")
  const [claimedAmount, setClaimedAmount] = useState("")
  const web3Account = useAccount()
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

  const setClaimedAmountByReceipt = useCallback(
    async receipt => {
      const claimedTokenAmountByReceipt = await web3.getClaimedTokenAmountByReceipt(
        receipt
      )
      setClaimedAmount(claimedTokenAmountByReceipt)
    },
    [setClaimedAmount]
  )

  const handleConfirmation = useCallback(
    (confirmationNumber, receipt) => {
      // Workaround to access current hash
      setTxHash(currentHash => {
        // Only process incoming confirmations if it is about current transaction
        if (receipt.transactionHash === currentHash) {
          if (
            confirmationNumber === parseInt(process.env.REACT_APP_CONFIRMATIONS)
          ) {
            setInternalState(STATE.CLAIM_END)
            setClaimedAmountByReceipt(receipt)
          }
          setConfirmations(confirmationNumber)
        }
        return currentHash
      })
    },
    [setClaimedAmountByReceipt]
  )

  const submit = useCallback(address => {
    setInternalState(STATE.LOADING)
    setClaimAddress(address)
    backend
      .fetchTokenEntitlement(address)
      .then(data => {
        const { proof, currentTokenBalance, originalTokenBalance } = data

        // currentTokenBalance might be a string, to preserve precision
        if (currentTokenBalance.toString() === "0") {
          setInternalState(STATE.NO_TOKENS)
        } else {
          showProof(proof, currentTokenBalance, originalTokenBalance)
        }
      })
      .catch(error => {
        console.error(error)
        if (error.code === backend.SERVER_ERROR_CODE) {
          showError(
            "Could not fetch token entitlement. There was an internal server error, please try again later."
          )
        } else {
          showError(
            "Could not fetch token entitlement. The server is unreachable, please check your internet connection."
          )
        }
      })
  }, [])

  const claim = useCallback(async () => {
    setInternalState(STATE.CLAIM_START)
    if (!(await requestPermission())) {
      showError(
        "In order to claim your tokens you have to give this site permission to your wallet."
      )
    }
    // We can not use the web3Account state variable, since this gets updated
    // by an interval and might not be correct at this point in time.
    else if (!sameAddress(await getDefaultAccount(), claimAddress)) {
      showError(
        `The selected account in your Web3 enabled browser does not match
               the merkle drop address and you can only claim the tokens for an
               account you control. To claim your tokens,
               please change the account of your Web3
               enabled browser or MetaMask plugin, or try a different address.`
      )
    } else if (!(await verifyChainId(process.env.REACT_APP_CHAIN_ID))) {
      showError(
        `You are connected to the wrong chain. To claim your tokens please connect
        to the ${process.env.REACT_APP_CHAIN_NAME}`
      )
    } else {
      try {
        await web3.claimTokens(
          claimAddress,
          originalClaimAmount,
          proof,
          handleSign,
          handleConfirmation
        )
      } catch (error) {
        console.error(error)
        if (error.code === web3.TRANSACTION_REVERTED_ERROR_CODE) {
          showError(
            "Your transaction have been reverted. Did you try to claim your tokens twice?",
            { state: STATE.TRANSACTION_FAILED }
          )
        } else if (error.code === web3.USER_REJECTED_ERROR_CODE) {
          setInternalState(STATE.SHOW_PROOF)
        } else {
          showError("Something went wrong with your transaction.", {
            state: STATE.TRANSACTION_FAILED,
          })
        }
      }
    }
  }, [claimAddress, originalClaimAmount, proof, handleSign, handleConfirmation])

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

  const handleClaimRequest = useCallback(async () => {
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

  const showError = (errorMessage, options = { state: STATE.ERROR }) => {
    setErrorMessage(errorMessage)
    setInternalState(options.state)
  }

  const showProof = (proof, currentClaimAmount, originalClaimAmount) => {
    setProof(proof)
    setCurrentClaimAmount(currentClaimAmount)
    setOriginalClaimAmount(originalClaimAmount)
    setInternalState(STATE.SHOW_PROOF)
  }

  let wrongAccountSelected = false

  // account can be undefined, if website has no permissions yet to read the account
  // In this case, we do not know whether the account is wrong
  if (web3Account) {
    wrongAccountSelected = !sameAddress(web3Account, claimAddress)
  }

  const Headline = () => (
    <div className="has-text-left p-b-lg">
      <h1 className="title">Merkle Drop Token Claim</h1>
      <p className="has-text-justified has-text-grey">
        Using this website, you can check if any of your addresses are eligible
        to withdraw Trustlines Network Tokens (TLN), create the needed Merkle
        proofs or claim your tokens directly via a web3 integration. Please note
        that claiming TLN is subject to these{" "}
        <a href="terms-conditions-merkle-drop.html">Terms and Conditions</a>.
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
        </div>
      )
    case STATE.NO_TOKENS:
      return (
        <div>
          <Headline />
          <ColumnsWrapper headline={"Check address eligibility"}>
            <div className="columns is-centered">
              <div className="column">
                <AddressDisplay address={claimAddress} />
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column">
                <Warning message="Sorry, this address is not eligible to claim any tokens." />
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column is-three-fifths">
                <RetryButton reset={reset} />
              </div>
            </div>
          </ColumnsWrapper>
        </div>
      )
    case STATE.SHOW_PROOF:
      return (
        <div>
          <Headline />
          <ColumnsWrapper headline={"Check address eligibility"}>
            <div className="columns is-centered">
              <div className="column">
                <AddressDisplay address={claimAddress} />
              </div>
            </div>
            <div className="columns is-centered">
              <ClaimAmount
                proof={proof}
                currentAmount={currentClaimAmount}
                originalAmount={originalClaimAmount}
                onClaim={handleClaimRequest}
                reset={reset}
                chainState={chainState}
                wrongAccount={wrongAccountSelected}
              />
              {showTermsAndConditionsModal && (
                <TermsAndConditionsModal
                  onReject={handleDeclineTermsAndCondition}
                  onAccept={onAcceptTermsAndCondition}
                />
              )}
            </div>
          </ColumnsWrapper>
          <ManualProofWrapper
            proof={proof}
            amount={originalClaimAmount}
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
            <ClaimSuccess
              txHash={txHash}
              confirmations={confirmations}
              amount={claimedAmount}
            />
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
