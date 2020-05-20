import { useState, useEffect } from "react"
import getWeb3, { getDefaultAccount } from "../web3"

export function useAccount() {
  const [account, setAccount] = useState("")

  useEffect(() => {
    // box variable to make it available in inner function
    const env = {
      checkAccountIntervalId: 0,
    }

    // define async function because effect function can not be async
    async function checkAccount() {
      try {
        if (getWeb3()) {
          // function that periodically checks the chain state
          async function check() {
            try {
              setAccount(await getDefaultAccount())
            } catch (e) {
              console.error(e)
              // Stop the periodical address check
              clearInterval(env.checkAccountIntervalId)
              setAccount(undefined)
            }
          }

          env.checkAccountIntervalId = setInterval(check, 500)
          check()
        } else {
          setAccount(undefined)
        }
      } catch (error) {
        console.log(error)
        setAccount(undefined)
      }
    }

    checkAccount()
    return () => clearInterval(env.checkAccountIntervalId)
  }, [])
  return account
}
