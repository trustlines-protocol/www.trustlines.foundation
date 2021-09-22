import React from "react";

import * as blockexplorer from "../../../common/utils/blockexplorer";
import WaitCard from "./wait-card";
import { LinkButton } from "../../../common/components/link-button";

function ClaimWait({ txHash }) {
  return (
    <WaitCard title="Waiting for confirmations">
      <div className="font-semibold">
        Your transaction has been sent and we are waiting for confirmation.
      </div>
      <div>
        Check status on&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={blockexplorer.generateTransactionUrl(txHash)}
          className="text-app-blue"
        >
          Etherscan
        </a>
      </div>
    </WaitCard>
  );
}

export default ClaimWait;
