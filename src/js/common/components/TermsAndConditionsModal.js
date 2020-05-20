import React, { useState, useEffect } from "react"

const SCROLL_THRESHOLD = 5

const elementScrolledToBottom = element => {
  return (
    element.scrollHeight - element.scrollTop <=
    element.clientHeight + SCROLL_THRESHOLD
  )
}

function TermsAndConditionsModal({ onReject, onAccept, children }) {
  const [scrolledToModalBottom, setScrolledToModalBottom] = useState(false)
  const termsAndConditionsModalReference = React.createRef()

  const checkAndSetScrolledToModalBottom = () => {
    if (elementScrolledToBottom(termsAndConditionsModalReference.current)) {
      setScrolledToModalBottom(true)
    }
  }

  useEffect(() => {
    checkAndSetScrolledToModalBottom()
    window.addEventListener("resize", checkAndSetScrolledToModalBottom)
    return () => {
      window.removeEventListener("resize", checkAndSetScrolledToModalBottom)
    }
  })

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-content">
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title has-text-weight-bold">
              Terms and Conditions
            </p>
          </header>
          <section
            className="modal-card-body has-text-grey"
            onScroll={checkAndSetScrolledToModalBottom}
            ref={termsAndConditionsModalReference}
          >
            {children}
          </section>
          <footer className="modal-card-foot">
            <div className="container has-text-centered">
              <div className="columns is-centered">
                <div className="column is-one-third">
                  <button
                    id="terms-and-conditions-modal-button-reject"
                    className="button is-rounded has-text-weight-bold is-outlined is-primary is-fullwidth"
                    onClick={onReject}
                  >
                    Reject
                  </button>
                </div>
                <div className="column is-one-third">
                  <button
                    id="terms-and-conditions-modal-button-accept"
                    className="button is-rounded has-text-weight-bold has-text-white is-background-gradient-dark is-fullwidth"
                    onClick={onAccept}
                    disabled={!scrolledToModalBottom}
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditionsModal
