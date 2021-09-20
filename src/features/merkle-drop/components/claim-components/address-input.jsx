import React, { useState, useCallback } from "react";
import Message from "./message";
import { isAddress } from "ethereum-address";
import { CHAIN_STATE } from "../../../common/hooks/chain-state";
import { Paste } from "../../../common/components/icons/paste";
import { Button } from "../../../common/components/button";

function AddressInput(props) {
  const addressRegex = new RegExp("^(0x)?[a-fA-F0-9]*$");
  const [address, setAddress] = useState("");
  const invalid = address.length > 0 && !isAddress(address);
  const valid = address.length > 0 && isAddress(address);
  const onSubmit = props.onSubmit;
  const chainState = props.chainState;

  let inputClasses = "";

  const handleChange = useCallback(
    event => {
      const newAddress = event.target.value;
      if (addressRegex.test(newAddress)) {
        setAddress(newAddress);
      }
    },
    [addressRegex]
  );

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      onSubmit(address);
    },
    [onSubmit, address]
  );

  const handlePaste = useCallback(() => {
    navigator.clipboard.readText().then(text => {
      setAddress(text);
    });
  }, []);

  if (invalid) {
    inputClasses += "border border-neon-pink";
  }

  const noDappWarningMessage =
    "Some functionalities are missing as no Web3 enabled browser was detected. Please install the Metamask plugin or browse this site with a Web3 enabled browser for full functionality.";

  const wrongChainWarningMessage = `You are connected to the wrong chain. For full functionality please connect to the ${process.env.REACT_APP_CHAIN_NAME}.`;

  return (
    <div>
      <form>
        <div className="flex flex-row">
          <div className="flex-1 pr-2">
            <div
              className={`flex flex-row items-center w-full rounded-full bg-grey-lighter text-rich-black-ligther h-12 my-4 ${inputClasses}`}
            >
              <input
                className="bg-grey-lighter ml-2 pl-2 w-full rounded-full placeholder-rich-black-lightest"
                autoComplete="off"
                spellCheck="false"
                type="text"
                value={address}
                onChange={handleChange}
                placeholder="Enter ETH Address (0x...)"
                autoFocus={props.autoFocus}
                required
              />
              <div className="mr-2">
                <Button
                  className="px-2 py-2 rounded-full hover:bg-grey"
                  type="button"
                  value="paste"
                  onClick={handlePaste}
                >
                  <Paste />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Button
              className={`px-8 py-4 bg-majorelle-blue flex items-center justify-center hover:bg-dark-green`}
              isDark
              type="submit"
              value="Submit"
              label="Check →"
              onClick={handleSubmit}
              disabled={!valid}
            />
          </div>
        </div>
        <div>
          {!address ? (
            <p className="text-dark-green text-sm">
              Enter a six figure letter-number combination for your ETH address
              to check if it is eligible to participate.
            </p>
          ) : invalid ? (
            <p className="text-neon-pink text-sm">
              Please enter a valid address
            </p>
          ) : (
            <p className="text-dark-green text-sm">&nbsp;</p>
          )}
        </div>
        <div className="py-2">
          {chainState === CHAIN_STATE.DISCONNECTED && (
            <Message>{noDappWarningMessage}</Message>
          )}
          {chainState === CHAIN_STATE.WRONG_CHAIN && (
            <Message>{wrongChainWarningMessage}</Message>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddressInput;
