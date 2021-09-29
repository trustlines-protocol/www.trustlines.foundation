import React from "react";
import Message from "./message";
import AddressDisplay from "./address-display";
import RetryButton from "./retry-button";

function NoTokens({ claimAddress, reset }) {
  return (
    <div className="flex flex-col py-4">
      <div>
        <AddressDisplay address={claimAddress} />
        <Message>
          <div>Sorry, this address is not eligible to claim any tokens.</div>
        </Message>
      </div>
      <div className="py-2">
        <RetryButton reset={reset} />
      </div>
    </div>
  );
}

export default NoTokens;
