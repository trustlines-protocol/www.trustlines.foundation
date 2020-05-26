import React from "react"

export default function MainHeader({ text, faIcon }) {
  // The key is needed to force a rerender
  return (
    <div>
      <span key={Math.random()} className="icon is-4 title has-text-success">
        <i className={faIcon} />
      </span>
      <span className="title is-3 has-text-success"> {text}</span>
    </div>
  )
}
