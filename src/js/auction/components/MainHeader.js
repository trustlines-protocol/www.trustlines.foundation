import React from "react"

export default function MainHeader({
  text,
  faIcon = "fa fa-arrow-circle-right",
}) {
  return (
    <div>
      <span className="icon is-4 title has-text-success">
        <i className={faIcon} />
      </span>
      <span className="title is-3 has-text-success"> {text}</span>
    </div>
  )
}
