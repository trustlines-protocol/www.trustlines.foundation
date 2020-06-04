import React from "react"
import { useCurrentPrice } from "./state/currentPrice"
import { formatTLNAmount } from "../../common/math"

export default function CurrentPrice() {
  const currentPrice = useCurrentPrice()

  return (
    <b>
      {currentPrice ? formatTLNAmount(currentPrice.toString()) : "loading..."}
    </b>
  )
}
