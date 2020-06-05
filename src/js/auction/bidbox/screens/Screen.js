import React from "react"
import MainHeader from "../components/MainHeader"

export default function Screen({ title, children, faIcon }) {
  return (
    <div>
      <MainHeader faIcon={faIcon} text={title} />
      {children}
    </div>
  )
}
