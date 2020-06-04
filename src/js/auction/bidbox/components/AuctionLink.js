import React from "react"

export default function AuctionLink(props) {
  return (
    <a
      href={`${process.env.REACT_APP_EXPLORER_URL}address/${process.env.AUCTION_ADDRESS}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  )
}
