import getWeb3, { sendContractTransaction } from "../../common/api/web3";
import AuctionABI from "../../common/abi/auction.json";
import TokenABI from "../../common/abi/token.json";

export const AuctionState = {
  DEPLOYED: "DeployedState",
  STARTED: "StartedState",
  DEPOSIT_PENDING: "DepositPendingState",
  ENDED: "EndedState",
  FAILED: "FailedState",
};

const auctionStateMapping = [
  AuctionState.DEPLOYED,
  AuctionState.STARTED,
  AuctionState.DEPOSIT_PENDING,
  AuctionState.ENDED,
  AuctionState.FAILED,
];

export async function fetchAuctionState() {
  return auctionStateMapping[
    await getAuctionContract()
      .methods.auctionState()
      .call()
  ];
}

export async function bid(address, onSign, onConfirmation) {
  const auctionContract = getAuctionContract();
  const contractFunctionCall = auctionContract.methods.bid();

  return sendContractTransaction(
    contractFunctionCall,
    address,
    onSign,
    onConfirmation
  );
}

export async function approve(address, amount, onSign, onConfirmation) {
  const tokenContract = getTokenContract();
  const contractFunctionCall = tokenContract.methods.approve(
    process.env.AUCTION_ADDRESS,
    amount
  );

  return sendContractTransaction(
    contractFunctionCall,
    address,
    onSign,
    onConfirmation
  );
}

export async function withdraw(address, onSign, onConfirmation) {
  const auctionContract = getAuctionContract();
  const contractFunctionCall = auctionContract.methods.withdraw();

  return sendContractTransaction(
    contractFunctionCall,
    address,
    onSign,
    onConfirmation
  );
}

export async function fetchValueToWithdraw(address) {
  const auctionContract = getAuctionContract();
  const auctionState = await fetchAuctionState();
  if (auctionState === AuctionState.ENDED) {
    return (await auctionContract.methods.bids(address).call()).sub(
      await auctionContract.methods.lowestSlotPrice().call()
    );
  } else if (auctionState === AuctionState.FAILED) {
    return auctionContract.methods.bids(address).call();
  } else {
    throw new Error(
      `Cannot get value to withdraw with current auction state ${auctionState}`
    );
  }
}

export async function fetchTokenBalance(address) {
  return getTokenContract()
    .methods.balanceOf(address)
    .call();
}

export async function fetchAllowance(address) {
  return getTokenContract()
    .methods.allowance(address, process.env.AUCTION_ADDRESS)
    .call();
}

export async function fetchCurrentPrice() {
  return getAuctionContract()
    .methods.currentPrice()
    .call();
}

export async function isWhitelisted(address) {
  return getAuctionContract()
    .methods.whitelist(address)
    .call();
}

export async function hasBid(address) {
  return !(await getPaidSlotPriceByAddress(address)).eq(0);
}

export async function getPaidSlotPriceByAddress(address) {
  return getAuctionContract()
    .methods.bids(address)
    .call();
}

export async function getPaidSlotPriceByReceipt(receipt) {
  const bidEventsInBlock = await getBidEventsInBlock(receipt.blockNumber);
  const bidEventsByTransaction = filterEventsByTransaction(
    bidEventsInBlock,
    receipt.transactionHash
  );
  throwIfNoSingleEvent(bidEventsByTransaction);
  return parseBidEventTokenAmount(bidEventsByTransaction[0]);
}

async function getBidEventsInBlock(blockNumber) {
  const merkleDropContract = getAuctionContract();
  const eventFilter = {
    fromBlock: blockNumber,
    toBlock: blockNumber,
  };

  return await merkleDropContract.getPastEvents("BidSubmitted", eventFilter);
}

function filterEventsByTransaction(events, transactionHash) {
  return events.filter(e => e.transactionHash === transactionHash);
}

function throwIfNoSingleEvent(events) {
  if (events.length !== 1) {
    throw new ParseWithdrawEventError(
      "Could not find a single event for given receipt."
    );
  }
}

function parseBidEventTokenAmount(bidEvent) {
  return bidEvent.returnValues.slotPrice.toString();
}

function getAuctionContract() {
  const web3 = getWeb3();
  return new web3.eth.Contract(AuctionABI, process.env.AUCTION_ADDRESS);
}

function getTokenContract() {
  const web3 = getWeb3();
  return new web3.eth.Contract(TokenABI, process.env.TLN_ADDRESS);
}

export const PARSE_BID_EVENT_ERROR_CODE = "PARSE_BID_EVENT_ERROR";

class ParseWithdrawEventError extends Error {
  constructor(...args) {
    super(...args);
    this.code = PARSE_BID_EVENT_ERROR_CODE;
  }
}
