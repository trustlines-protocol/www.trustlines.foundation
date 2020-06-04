import React from "react"

export default function TLNLink(props) {
  return (
    <a
      href={`${process.env.REACT_APP_EXPLORER_URL}address/${process.env.TLN_ADDRESS}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  )
}
