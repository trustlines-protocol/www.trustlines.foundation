import React from "react";

import { formatTLNAmount } from "../../common/utils/math";

export function CurrentPrice({
  status,
  lowestSlotPriceInWEI,
  currentPriceInWEI,
  initialPriceInWEI,
}) {
  const [label, value] = getCurrentPriceLabelAndValue({
    status,
    lowestSlotPriceInWEI,
    currentPriceInWEI,
    initialPriceInWEI,
  });

  if (!label) {
    return null;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="text-rich-black-lighter">{label}</div>
      <div className="text-rich-black-lightest md:text-5xl text-4xl font-semibold">
        {value}
      </div>
    </div>
  );
}

function getCurrentPriceLabelAndValue({
  status,
  lowestSlotPriceInWEI,
  currentPriceInWEI,
  initialPriceInWEI,
}) {
  let label, value;

  if (status === "Finished" || status === "Deposit Pending") {
    label = "Lowest Slot Price";
    value = lowestSlotPriceInWEI;
  } else if (status === "Started") {
    label = "Current Slot Price";
    value = currentPriceInWEI;
  } else if (status === "Not Started") {
    label = "Initial Slot Price";
    value = initialPriceInWEI;
  } else {
    return [];
  }

  return [label, formatTLNAmount(value)];
}
