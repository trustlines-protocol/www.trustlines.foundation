import Web3 from "web3"

let web3

export default function getWeb3() {
  if (!web3) {
    connect()
  }

  return web3
}

export function connect() {
  // Modern dapp browsers...
  if (window.ethereum) {
    console.log("Found modern dapp browser")
    web3 = new Web3(window.ethereum)
    return true
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    console.log("Found legacy dapp browser")
    web3 = new Web3(window.web3.currentProvider)
    return true
  }
  // Non-dapp browsers...
  else {
    console.log(
      "No Web3 enabled browser detected. You should consider trying MetaMask!"
    )
    return false
  }
}

export async function requestPermission() {
  // Modern dapp browsers...
  if (window.ethereum) {
    try {
      // Request account access if needed
      await window.ethereum.enable()
      return true
    } catch (error) {
      // User denied account access...
      console.error(error)
      return false
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    return true
  }
  // Non-dapp browsers...
  else {
    throw Error("Can not ask for permission, no dapp browser found.")
  }
}

export async function verifyChainId(chainId) {
  return (await web3.eth.getChainId()) === parseInt(chainId)
}

/// Queries the default account. Returns undefined if wallet locked, or if website has no permission to query.
export async function getDefaultAccount() {
  return (await web3.eth.getAccounts())[0]
}

/// Compares two hex encoded addresses ignoring the checksum
export function sameAddress(address1, address2) {
  return address1.toLowerCase() === address2.toLowerCase()
}
