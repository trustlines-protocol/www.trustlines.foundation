import React, { useCallback, useState } from "react";
import ActionButton from "../bid-components/ActionButton";
import TermsAndConditionsModal from "../modal";
import TermsAndConditions from "../terms";
import { Card } from "../../../common/components/card";

export default function AcceptTermsAndConditions({ onAccept, onReject }) {
  const [isVisibleTermsAndCondition, setIsVisibleTermsAndCondition] = useState(
    false
  );

  const showTermsAndConditionsModal = useCallback(
    () => setIsVisibleTermsAndCondition(true),
    []
  );

  const acceptTermsAndCondition = useCallback(async () => {
    setIsVisibleTermsAndCondition(false);
    onAccept && onAccept();
  }, [onAccept]);

  const rejectTermsAndCondition = useCallback(() => {
    setIsVisibleTermsAndCondition(false);
    onReject && onReject();
  }, [onReject]);

  return (
    <div>
      <div className="flex flex-row my-2 items-center">
        <Card className="bg-dark-green-lighter rounded-full md:h-16 md:w-16 h-10 w-10 md:text-3xl text-xl font-semibold text-aquamarine-green mr-4">
          1
        </Card>
        <h3 className="md:text-3xl text-xl leading-tight font-semibold text-aquamarine-green">
          Connect to a Wallet
        </h3>
      </div>
      <div className="text-off-white text-sm mb-8">
        To proceed you must read and accept our terms & conditions.
      </div>
      <div className="flex flex-row md:justify-start justify-center">
        <ActionButton
          label="Terms & Conditions →"
          className="px-8 py-4 bg-dark-green-lighter hover:bg-dark-green text-aquamarine-green-lighter"
          onClick={() => {
            showTermsAndConditionsModal(true);
          }}
        />
      </div>
      {isVisibleTermsAndCondition && (
        <TermsAndConditionsModal
          onReject={rejectTermsAndCondition}
          onAccept={acceptTermsAndCondition}
        >
          <TermsAndConditions />
        </TermsAndConditionsModal>
      )}
    </div>
  );
}
