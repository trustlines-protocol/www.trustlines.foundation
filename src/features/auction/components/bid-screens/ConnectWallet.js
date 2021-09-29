import React from "react";
import MessageBlock from "../bid-components/MessageBlock";
import ActionButton from "../bid-components/ActionButton";

export default function ConnectWallet({ onConnect }) {
  return (
    <div>
      <div>
        <MessageBlock>
          To proceed, connect a compatible Web3 wallet.
        </MessageBlock>
      </div>
      <div className="pt-4">
        <ActionButton
          label="Connect"
          className="px-8 py-4"
          onClick={onConnect}
        />
      </div>
    </div>
  );
}
