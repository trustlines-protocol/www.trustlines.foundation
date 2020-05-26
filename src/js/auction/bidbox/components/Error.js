import React from "react"

import MainHeader from "./MainHeader"
import MessageBlock from "./MessageBlock"

export default function Error({ title, children }) {
  return (
    <div>
      <div className="column">
        <MainHeader faIcon="fa fa-exclamation-circle" text={title} />
      </div>
      <div className="column">
        <MessageBlock>{children}</MessageBlock>
      </div>
    </div>
  )
}
