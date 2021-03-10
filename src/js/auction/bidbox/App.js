import React from "react"
import BidBox from "./BidBox"

export default function AuctionApp({ title }) {
  return (
    <>
      <h3 className="title is-3 has-text-weight-bold has-text-primary">
        {title}
      </h3>
      <div className="box has-background-white">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <BidBox />
          </div>
        </div>
      </div>
    </>
  )
}
