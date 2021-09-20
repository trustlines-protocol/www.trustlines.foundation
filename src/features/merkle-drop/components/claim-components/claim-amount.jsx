import React, { useCallback } from "react";

import { Button } from "../../../common/components/button";
import RetryButton from "./retry-button";
import Message from "./message";
import { CHAIN_STATE } from "../../../common/hooks/chain-state";
import { parseTokenAmount } from "../../../common/utils/math";

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
    onClaim(proof, originalAmount);
  }, [onClaim, proof, originalAmount]);

  const canClaim =
    (chainState === CHAIN_STATE.CONNECTED ||
      chainState === CHAIN_STATE.CHAIN_UNKNOWN) &&
    !wrongAccount;

  const disconnectedWarningMessage =
    "To claim your tokens, please browse this site with a Web3 enabled browser, install the Metamask plugin and set up your account.";

  const wrongChainWarningMessage = `In order to claim your Tokens directly, you need to connect to the ${process.env.REACT_APP_CHAIN_NAME}`;

  const chainUnknownWarningMessage = `We were unable to check the chain you are connected to, please make sure you are connected to the ${process.env.REACT_APP_CHAIN_NAME} before proceeding.`;

  const wrongAccountWarningMessage =
    "The selected account in your Web3 enabled browser does not match the merkle drop address and you can only claim the tokens for an account you control. To claim your tokens, please change the account of your Web3 enabled browser or MetaMask plugin, or try to claim the tokens for a different address.";

  return (
    <div className="column">
      <div className="py-2">
        <div className="font-semibold">
          Yes, this address is eligible for a token claim.
        </div>
        <div className="subtitle is-6 has-text-success">
          {parseTokenAmount(currentAmount)} TLN claimable out of original&nbsp;
          {parseTokenAmount(originalAmount)} TLN
        </div>
      </div>
      {chainState === CHAIN_STATE.DISCONNECTED && (
        <Message>{disconnectedWarningMessage}</Message>
      )}
      {chainState === CHAIN_STATE.WRONG_CHAIN && (
        <Message>{wrongChainWarningMessage}</Message>
      )}
      {chainState === CHAIN_STATE.CHAIN_UNKNOWN && (
        <Message>{chainUnknownWarningMessage}</Message>
      )}
      {wrongAccount && <Message>{wrongAccountWarningMessage}</Message>}
      <div className="flex flex-wrap justify-center items-center">
        <div className="m-2">
          <RetryButton reset={reset} />
        </div>
        <div className="my-2">
          <Button
            onClick={handleClaim}
            isDark
            className="px-8 py-4 hover:bg-dark-green"
            disabled={!canClaim}
          >
            Claim tokens now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ClaimAmount;
