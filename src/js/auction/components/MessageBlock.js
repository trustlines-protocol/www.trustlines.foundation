import React from "react"

export default function MessageBlock(props) {
  return (
    <div {...props} className={`content {props.className}`}>
      {props.content}
    </div>
  )
}
