import Web3 from "web3";

let web3;

export default function getWeb3() {
  if (!web3) {
    connect();
  }

  return web3;
}

export function connect() {
  // Modern dapp browsers...
  if (window.ethereum) {
    console.log("Found modern dapp browser");
    web3 = new Web3(window.ethereum);
    return true;
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    console.log("Found legacy dapp browser");
    web3 = new Web3(window.web3.currentProvider);
    return true;
  }
  // Non-dapp browsers...
  else {
    console.log(
      "No Web3 enabled browser detected. You should consider trying MetaMask!"
    );
    return false;
  }
}

export async function requestPermission() {
  // Modern dapp browsers...
  if (window.ethereum) {
    try {
      // Request account access if needed
      await window.ethereum.enable();
      return true;
    } catch (error) {
      // User denied account access...
      console.error(error);
      return false;
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    return true;
  }
  // Non-dapp browsers...
  else {
    throw Error("Can not ask for permission, no dapp browser found.");
  }
}

export async function fetchBalance(address) {
  return web3.eth.getBalance(address);
}

export async function verifyChainId(chainId) {
  return (await web3.eth.getChainId()) === parseInt(chainId);
}

/// Queries the default account. Returns undefined if wallet locked, or if website has no permission to query.
export async function getDefaultAccount() {
  return (await web3.eth.getAccounts())[0];
}

/// Compares two hex encoded addresses ignoring the checksum
export function sameAddress(address1, address2) {
  return address1.toLowerCase() === address2.toLowerCase();
}

export async function sendContractTransaction(
  web3FunctionCall,
  sender,
  onSign,
  onConfirmation
) {
  console.log(sender);
  try {
    return await web3FunctionCall
      .send({
        from: sender,
      })
      .on("transactionHash", hash => onSign && onSign(hash))
      .on(
        "confirmation",
        (confirmationNumber, receipt) =>
          onConfirmation && onConfirmation(confirmationNumber, receipt)
      );
  } catch (error) {
    // As there seem to be no common error format, this is the best we can do
    if (error.message.includes("revert")) {
      throw new TransactionRevertedError(error.message);
    } else if (error.message.includes("denied")) {
      throw new UserRejectedError(error.message);
    } else {
      throw new Error(error.message);
    }
  }
}

export const USER_REJECTED_ERROR_CODE = "USER_REJECTED_ERROR";
export const TRANSACTION_REVERTED_ERROR_CODE = "TRANSACTION_REVERTED_ERROR";

class UserRejectedError extends Error {
  constructor(...args) {
    super(...args);
    this.code = USER_REJECTED_ERROR_CODE;
  }
}

class TransactionRevertedError extends Error {
  constructor(...args) {
    super(...args);
    this.code = TRANSACTION_REVERTED_ERROR_CODE;
  }
}
