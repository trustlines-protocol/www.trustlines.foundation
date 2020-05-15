import React from "react"
import BidFlow from "./BidFlow"

export default function AuctionApp() {
  return (
    <div className="box has-background-white">
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <BidFlow />
        </div>
      </div>
    </div>
  )
}
