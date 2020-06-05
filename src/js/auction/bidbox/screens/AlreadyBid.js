import React from "react"
import { formatTLNAmount } from "../../../common/math"
import Error from "../components/Error"

export default function AlreadyBid({ web3Account, paidSlotPrice }) {
  return (
    <Error title="Already bid">
      The selected account {web3Account} has already bid{" "}
      {formatTLNAmount(paidSlotPrice)}.
    </Error>
  )
}
