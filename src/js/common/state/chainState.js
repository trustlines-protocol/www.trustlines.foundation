import { useState, useEffect } from "react"
import getWeb3, { verifyChainId } from "../web3"

export const CHAIN_STATE = {
  CONNECTING: "connecting",
  CONNECTED: "connected",
  WRONG_CHAIN: "wrongChain",
  CHAIN_UNKNOWN: "chainUnknown",
  DISCONNECTED: "disconnected",
}

export function useChainState() {
  const [chainState, setChainState] = useState(CHAIN_STATE.CONNECTING)

  useEffect(() => {
    // box variable to make it available in inner function
    const env = {
      chainCheckIntervalId: 0,
    }

    // define async function because effect function can not be async
    async function connect() {
      try {
        if (getWeb3()) {
          // function that periodically checks the chain state
          async function checkChain() {
            try {
              if (await verifyChainId(process.env.REACT_APP_CHAIN_ID)) {
                setChainState(CHAIN_STATE.CONNECTED)
              } else {
                setChainState(CHAIN_STATE.WRONG_CHAIN)
              }
            } catch (e) {
              console.error(e)
              // Stop the periodical chain check
              clearInterval(env.chainCheckIntervalId)
              setChainState(CHAIN_STATE.CHAIN_UNKNOWN)
            }
          }

          env.chainCheckIntervalId = setInterval(checkChain, 500)
          checkChain()
        } else {
          setChainState(CHAIN_STATE.DISCONNECTED)
        }
      } catch (error) {
        console.log(error)
        setChainState(CHAIN_STATE.DISCONNECTED)
      }
    }

    connect()
    return () => clearInterval(env.chainCheckIntervalId)
  }, [])
  return chainState
}
