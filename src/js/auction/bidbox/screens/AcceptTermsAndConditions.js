import React, { useCallback, useState } from "react"
import MessageBlock from "../components/MessageBlock"
import ActionButton from "../components/ActionButton"
import TermsAndConditionsModal from "../../../common/components/TermsAndConditionsModal"
import Screen from "./Screen"
import TermsAndConditions from "../components/TermsAndConditions"

export default function AcceptTermsAndConditions({ onAccept, onReject }) {
  const [isVisibleTermsAndCondition, setIsVisibleTermsAndCondition] = useState(
    false
  )

  const showTermsAndConditionsModal = useCallback(
    () => setIsVisibleTermsAndCondition(true),
    []
  )

  const acceptTermsAndCondition = useCallback(async () => {
    setIsVisibleTermsAndCondition(false)
    onAccept && onAccept()
  }, [onAccept])

  const rejectTermsAndCondition = useCallback(() => {
    setIsVisibleTermsAndCondition(false)
    onReject && onReject()
  }, [onReject])

  return (
    <Screen
      faIcon="fa fa-arrow-circle-right"
      title="Accept the Terms and Conditions"
    >
      <MessageBlock>
        In order to begin with your participation, please read and accept our
        terms and conditions.
      </MessageBlock>
      <ActionButton
        label="Terms & Conditions"
        onClick={showTermsAndConditionsModal}
      />
      {isVisibleTermsAndCondition && (
        <TermsAndConditionsModal
          onReject={rejectTermsAndCondition}
          onAccept={acceptTermsAndCondition}
        >
          <TermsAndConditions />
        </TermsAndConditionsModal>
      )}
    </Screen>
  )
}
