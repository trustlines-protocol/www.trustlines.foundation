import { TLN_BASE } from "./const"

export function roundUp(price) {
  return Math.ceil((price / TLN_BASE) * 1000) / 1000
}

export function parseTokenAmount(amount) {
  return (
    parseInt(amount) / Math.pow(10, process.env.REACT_APP_TOKEN_DECIMALS)
  ).toFixed(process.env.REACT_APP_SHOW_DECIMALS)
}
