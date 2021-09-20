import React from "react";

import * as blockexplorer from "../../../common/utils/blockexplorer";
import { parseTokenAmount } from "../../../common/utils/math";

function ClaimSuccess({ confirmations, txHash, amount }) {
  const confirmationsString =
    confirmations <= 20 ? confirmations.toString() : "> 20";

  return (
    <div className="box has-text-centered">
      <h1 className="subtitle is-2 has-text-weight-bold">
        {amount && parseTokenAmount(amount)}
        <br />
        Tokens successfully claimed!
        <br />
        <span className="icon is-large">
          <i className="fas fa-check-circle fa-lg" />
        </span>
      </h1>
      <h5 className="subtitle is-5 has-text-grey">
        [{confirmationsString}] confirmations
      </h5>
      <h5 className="subtitle is-5 has-text-centered p-b-lg">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={blockexplorer.generateTransactionUrl(txHash)}
        >
          View transaction on Etherscan
        </a>
      </h5>
    </div>
  );
}

export default ClaimSuccess;
