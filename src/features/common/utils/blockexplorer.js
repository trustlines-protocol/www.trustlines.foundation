export function generateTransactionUrl(tx_hash) {
  return `${process.env.REACT_APP_EXPLORER_URL}tx/${tx_hash}`;
}
