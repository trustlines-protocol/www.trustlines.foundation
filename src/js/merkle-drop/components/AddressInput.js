import React, { useState, useCallback } from "react"
import Warning from "./Warning.js"
import { isAddress } from "ethereum-address"
import { CHAIN_STATE } from "../../common/state/chainState"

function AddressInput(props) {
  const addressRegex = new RegExp("^(0x)?[a-fA-F0-9]*$")
  const [address, setAddress] = useState("")
  const invalid = address.length > 0 && !isAddress(address)
  const valid = address.length > 0 && isAddress(address)
  const onSubmit = props.onSubmit
  const chainState = props.chainState

  let inputClasses = "input has-text-weight-bold has-text-grey "

  const handleChange = useCallback(
    event => {
      const newAddress = event.target.value
      if (addressRegex.test(newAddress)) {
        setAddress(newAddress)
      }
    },
    [addressRegex]
  )

  const handleSubmit = useCallback(
    event => {
      event.preventDefault()
      onSubmit(address)
    },
    [onSubmit, address]
  )

  if (invalid) {
    inputClasses += " is-danger"
  }

  const noDappWarningMessage =
    "Some functionalities are missing as no Web3 enabled browser was detected. Please install the Metamask plugin or browse this site with a Web3 enabled browser for full functionality."

  const wrongChainWarningMessage = `You are connected to the wrong chain. For full functionality please connect to the ${process.env.REACT_APP_CHAIN_NAME}.`

  return (
    <div>
      <form>
        <div className="field">
          <label
            className="label has-text-weight-light has-text-grey"
            htmlFor="address"
          >
            ETH address
          </label>
          <div className="control">
            <input
              autoComplete="off"
              spellCheck="false"
              id="address"
              className={inputClasses}
              type="text"
              value={address}
              onChange={handleChange}
              placeholder="Enter ETH address..."
              autoFocus={props.autoFocus}
            />
          </div>
          {invalid ? (
            <div className="has-text-centered help is-danger">
              Please enter a valid address
            </div>
          ) : (
            <div className="has-text-centered help">&nbsp;</div>
          )}
        </div>
        {chainState === CHAIN_STATE.DISCONNECTED && (
          <Warning message={noDappWarningMessage} />
        )}
        {chainState === CHAIN_STATE.WRONG_CHAIN && (
          <Warning message={wrongChainWarningMessage} />
        )}
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <div className="control has-text-centered">
              <input
                className="button is-rounded has-text-weight-bold has-text-white is-background-gradient-dark is-fullwidth"
                type="submit"
                value="Check eligibility"
                onClick={handleSubmit}
                disabled={!valid}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddressInput
