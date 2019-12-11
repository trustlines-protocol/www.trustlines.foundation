import React, { useCallback, useState } from "react"

import ManualProof from "./ManualProof"

function ManualProofWrapper({ proof, showProof, amount, onOpen }) {
  const [toggled, setToggled] = useState(false)

  const handleToggle = useCallback(() => {
    if (showProof) {
      setToggled(!toggled)
    } else {
      setToggled(true)
      onOpen()
    }
  }, [showProof, toggled, setToggled, onOpen])

  let showProofToggleClassNames = "fas is-clickable fa-2x "
  if (toggled) {
    showProofToggleClassNames += "fa-angle-up"
  } else {
    showProofToggleClassNames += "fa-angle-down"
  }

  return (
    <div className="columns">
      <div className="column is-5">
        <button
          onClick={handleToggle}
          className="borderless-button is-paddingless"
        >
          <h5
            className={
              "title is-5 " +
              (toggled && showProof
                ? "has-text-weight-bold"
                : "has-text-weight-light")
            }
          >
            <span
              className={
                "icon is-medium " +
                (toggled && showProof ? "" : "has-opacity-zero")
              }
            >
              <i className="fas fa-arrow-right" />
            </span>
            Claim tokens manually
          </h5>
        </button>
      </div>
      <div className="is-divider-vertical" />
      <div className="column has-text-centered">
        <button
          onClick={handleToggle}
          className="icon borderless-button is-large has-text-info"
          key={showProofToggleClassNames}
        >
          <i className={showProofToggleClassNames} />
        </button>
        {toggled && showProof && (
          <ManualProof proof={proof} originalAmount={amount} />
        )}
      </div>
    </div>
  )
}

export default ManualProofWrapper
