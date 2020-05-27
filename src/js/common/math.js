import { TLN_BASE } from "./const"
import { unit, createUnit, format } from "mathjs"

createUnit({ TLN: { prefixes: "short", baseName: "TLN" } })

export function roundUp(price) {
  return Math.ceil((price / TLN_BASE) * 1000) / 1000
}

export function parseTokenAmount(amount) {
  return (
    parseInt(amount) / Math.pow(10, process.env.REACT_APP_TOKEN_DECIMALS)
  ).toFixed(process.env.REACT_APP_SHOW_DECIMALS)
}

export function formatTLNAmount(amount) {
  const unitInInternationalSystem = format(unit(roundUp(amount), "TLN"), 4)
  // We want a space in between the prefix and `TLN` so we slice it and add it back with a space
  const unitWithoutBase = unitInInternationalSystem.slice(0, -3)
  return unitWithoutBase + "TLN"
}
