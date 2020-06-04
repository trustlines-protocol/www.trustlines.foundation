import React from "react"

export default function SubscribeButton(props) {
  return (
    <div className="control">
      <input
        {...props}
        type="submit"
        value="Submit"
        className={`newsletter-button button is-primary has-shadow-primary is-rounded has-text-weight-bold ${props.className}`}
      />
    </div>
  )
}
