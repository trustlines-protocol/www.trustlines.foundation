import React from "react"

export default function ConditionsCheckbox(props) {
  return (
    <div className="control">
      <input
        {...props}
        type="checkbox"
        className={`checkbox is-big-checkbox ${props.className}`}
      />
      <label className="has-text-justified is-size-7">
        By checking this box you acknowledge that your information will be
        transferred to Mailchimp for processing and agree to our&nbsp;
        <a href="/legal-imprint-privacy-policy.html" target="_blank">
          pricacy policy
        </a>
        .
      </label>
    </div>
  )
}
