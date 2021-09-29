import React from "react";

import ClaimAmount from "./claim-amount";
import AddressDisplay from "./address-display";
import TermsAndConditions from "./terms-modal";
import ManualProofWrapper from "./manual-proof-wrapper";

function ClaimValid({
  address,
  proof,
  originalAmount,
  currentAmount,
  onClaim,
  reset,
  chainState,
  wrongAccount,
  onReject,
  onAccept,
  requestTermsAndCondition,
  showTermsAndConditionsModal,
}) {
  return (
    <div>
      <div>
        <AddressDisplay address={address} />
      </div>
      <div>
        <ClaimAmount
          proof={proof}
          currentAmount={currentAmount}
          originalAmount={originalAmount}
          onClaim={onClaim}
          reset={reset}
          chainState={chainState}
          wrongAccount={wrongAccount}
        />
        {showTermsAndConditionsModal ? (
          <TermsAndConditions onAccept={onAccept} onReject={onReject} />
        ) : null}
      </div>
      <div>
        <ManualProofWrapper
          proof={proof}
          amount={originalAmount}
          requestTermsAndCondition={requestTermsAndCondition}
        />
      </div>
    </div>
  );
}

export default ClaimValid;
