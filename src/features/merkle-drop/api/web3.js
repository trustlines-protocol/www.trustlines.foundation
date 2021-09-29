import getWeb3 from "../../common/api/web3";
import MerkleDropABI from "../../common/abi/merkle-drop.json";

export async function claimTokens(
  address,
  value,
  proof,
  onSign,
  onConfirmation
) {
  const merkleDropContract = getMerkleDropContract();

  try {
    return await merkleDropContract.methods
      .withdraw(value, proof)
      .send({
        from: address,
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

export async function getClaimedTokenAmountByReceipt(receipt) {
  const withdrawEventsInBlock = await getWithdrawEventsInBlock(
    receipt.blockNumber
  );
  const withdrawEventsByTransaction = filterEventsByTransaction(
    withdrawEventsInBlock,
    receipt.transactionHash
  );
  throwIfNoSingleEvent(withdrawEventsByTransaction);
  return parseWithdrawEventTokenAmount(withdrawEventsByTransaction[0]);
}

async function getWithdrawEventsInBlock(blockNumber) {
  const merkleDropContract = getMerkleDropContract();
  const eventFilter = {
    fromBlock: blockNumber,
    toBlock: blockNumber,
  };

  return await merkleDropContract.getPastEvents("Withdraw", eventFilter);
}

function filterEventsByTransaction(events, transactionHash) {
  return events.filter(e => e.transactionHash === transactionHash);
}

function throwIfNoSingleEvent(events) {
  if (events.length !== 1) {
    throw new ParseWithdrawEventError(
      "Could not find a single withdraw event for given receipt."
    );
  }
}

function parseWithdrawEventTokenAmount(withdrawEvent) {
  window._myEvent = withdrawEvent;
  // This event argument has the type BigNumber.
  // We convert it to a String for an unified handling of amount values
  // (like by the backend) to enable further processing.
  return withdrawEvent.returnValues.value.toString();
}

function getMerkleDropContract() {
  const web3 = getWeb3();
  // TODO: Theoretically, web3 could be undefined here. Should not happen, but might. Handle?
  const contract = new web3.eth.Contract(
    MerkleDropABI,
    process.env.REACT_APP_MERKLE_DROP_ADDRESS
  );
  return contract;
}

export const USER_REJECTED_ERROR_CODE = "USER_REJECTED_ERROR";
export const TRANSACTION_REVERTED_ERROR_CODE = "TRANSACTION_REVERTED_ERROR";
export const PARSE_WITHDRAW_EVENT_ERROR_CODE = "PARSE_WITHDRAW_EVENT_ERROR";

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

class ParseWithdrawEventError extends Error {
  constructor(...args) {
    super(...args);
    this.code = PARSE_WITHDRAW_EVENT_ERROR_CODE;
  }
}
