import React from "react"

import MainHeader from "./MainHeader"
import MessageBlock from "./MessageBlock"

export default function Error({ title, children }) {
  return (
    <div>
      <MainHeader faIcon="fa fa-exclamation-circle" text={title} />
      <MessageBlock>{children}</MessageBlock>
    </div>
  )
}
