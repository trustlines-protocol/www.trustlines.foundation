import React, { useCallback } from "react"

import Button from "./Button"
import RetryButton from "./RetryButton"
import Warning from "./Warning"
import { CHAIN_STATE } from "../../common/state/chainState"
import { parseTokenAmount } from "../../common/math"

function ClaimAmount({
  proof,
  originalAmount,
  currentAmount,
  onClaim,
  reset,
  chainState,
  wrongAccount,
}) {
  const handleClaim = useCallback(() => {
    onClaim(proof, originalAmount)
  }, [onClaim, proof, originalAmount])

  const canClaim =
    (chainState === CHAIN_STATE.CONNECTED ||
      chainState === CHAIN_STATE.CHAIN_UNKNOWN) &&
    !wrongAccount

  const disconnectedWarningMessage =
    "To claim your tokens, please browse this site with a Web3 enabled browser, install the Metamask plugin and set up your account."

  const wrongChainWarningMessage = `In order to claim your Tokens directly, you need to connect to the ${process.env.REACT_APP_CHAIN_NAME}`

  const chainUnknownWarningMessage = `We were unable to check the chain you are connected to, please make sure you are connected to the ${process.env.REACT_APP_CHAIN_NAME} before proceeding.`

  const wrongAccountWarningMessage =
    "The selected account in your Web3 enabled browser does not match the merkle drop address and you can only claim the tokens for an account you control. To claim your tokens, please change the account of your Web3 enabled browser or MetaMask plugin, or try to claim the tokens for a different address."

  return (
    <div className="column">
      <div className="box has-text-centered">
        <div className="columns is-vcentered">
          <div className="column is-2">
            <span className="icon is-medium title has-text-success">
              <i className="fas fa-check-circle" />
            </span>
          </div>
          <div className="column has-text-left">
            <span className="title is-6 has-text-success">
              Yes, this address is eligible for a token claim.
            </span>
            <br />
            <span className="subtitle is-6 has-text-success">
              {parseTokenAmount(currentAmount)} TLN claimable out of
              original&nbsp;{parseTokenAmount(originalAmount)} TLN
            </span>
          </div>
        </div>
      </div>
      {chainState === CHAIN_STATE.DISCONNECTED && (
        <Warning message={disconnectedWarningMessage} />
      )}
      {chainState === CHAIN_STATE.WRONG_CHAIN && (
        <Warning message={wrongChainWarningMessage} />
      )}
      {chainState === CHAIN_STATE.CHAIN_UNKNOWN && (
        <Warning message={chainUnknownWarningMessage} />
      )}
      {wrongAccount && <Warning message={wrongAccountWarningMessage} />}
      <div className="columns is-desktop">
        <div className="column is-half-desktop">
          <RetryButton reset={reset} className="is-outlined is-primary" />
        </div>
        <div className="column is-half-desktop">
          <Button
            onClick={handleClaim}
            className="has-text-white is-background-gradient-dark"
            disabled={!canClaim}
          >
            Claim tokens now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ClaimAmount
