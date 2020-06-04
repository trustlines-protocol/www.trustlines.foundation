import React from "react"
import BidBox from "./BidBox"

export default function AuctionApp() {
  return (
    <div className="box has-background-white">
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <BidBox />
        </div>
      </div>
    </div>
  )
}
