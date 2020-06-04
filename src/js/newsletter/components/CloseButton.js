import React from "react"

export default function CloseButton(props) {
  return (
    <button
      {...props}
      className={`newsletter-button button is-text is-paddingless is-light is-inverted {props.className}`}
    >
      No thanks
    </button>
  )
}
