import React, { useCallback, useState } from "react";

import ManualProof from "./ManualProof";
import { Button } from "../../../common/components/button";

function ManualProofWrapper({ proof, amount, requestTermsAndCondition }) {
  const [showProof, setShowProof] = useState(false);

  const handleToggle = useCallback(async () => {
    const accepted = await requestTermsAndCondition();
    if (accepted) {
      setShowProof(!showProof);
    }
  }, [requestTermsAndCondition, showProof]);

  let showProofToggleClassNames = "fas is-clickable fa-2x ";
  if (showProof) {
    showProofToggleClassNames += "fa-angle-up";
  } else {
    showProofToggleClassNames += "fa-angle-down";
  }

  return (
    <div>
      <div className="flex fex-row item-center justify-center">
        <Button
          onClick={handleToggle}
          isDark
          className="px-8 py-4 hover:bg-dark-green"
        >
          <h5
            className={
              "title is-5 " +
              (showProof ? "has-text-weight-bold" : "has-text-weight-light")
            }
          >
            <span
              className={
                "icon is-medium " + (showProof ? "" : "has-opacity-zero")
              }
            >
              <i className="fas fa-arrow-right" />
            </span>
            {showProof ? "Show proof" : "Claim tokens manually"}
          </h5>
        </Button>
      </div>
      {/* <div className="column has-text-centered">
        <Button
          onClick={handleToggle}
          className="icon borderless-button is-large has-text-info"
          key={showProofToggleClassNames}
        >
          <i className={showProofToggleClassNames} />
        </Button>
      </div> */}
      <div>
        {showProof && <ManualProof proof={proof} originalAmount={amount} />}
      </div>
    </div>
  );
}

export default ManualProofWrapper;
