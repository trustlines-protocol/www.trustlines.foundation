import getWeb3 from "../../common/web3"
import MerkleDropABI from "../../abi/merkle-drop.json"

export async function claimTokens(
  address,
  value,
  proof,
  onSign,
  onConfirmation
) {
  const web3 = getWeb3()
  // TODO: Theoretically, web3 could be undefined here. Should not happen, but might. Handle?
  const contract = new web3.eth.Contract(
    MerkleDropABI,
    process.env.REACT_APP_MERKLE_DROP_ADDRESS
  )
  try {
    return await contract.methods
      .withdraw(value, proof)
      .send({
        from: address,
      })
      .on("transactionHash", hash => onSign && onSign(hash))
      .on(
        "confirmation",
        (confirmationNumber, receipt) =>
          onConfirmation && onConfirmation(confirmationNumber, receipt)
      )
  } catch (error) {
    // As there seem to be no common error format, this is the best we can do
    if (error.message.includes("revert")) {
      throw new TransactionRevertedError(error.message)
    } else if (error.message.includes("denied")) {
      throw new UserRejectedError(error.message)
    } else {
      throw new Error(error.message)
    }
  }
}

export const USER_REJECTED_ERROR_CODE = "USER_REJECTED_ERROR"
export const TRANSACTION_REVERTED_ERROR_CODE = "TRANSACTION_REVERTED_ERROR"

class UserRejectedError extends Error {
  constructor(...args) {
    super(...args)
    this.code = USER_REJECTED_ERROR_CODE
  }
}

class TransactionRevertedError extends Error {
  constructor(...args) {
    super(...args)
    this.code = TRANSACTION_REVERTED_ERROR_CODE
  }
}
