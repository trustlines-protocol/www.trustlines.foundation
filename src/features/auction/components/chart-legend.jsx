import React from "react";

import { CurrentPrice } from "./current-price";
import { Status } from "./status";
import { SlotBox } from "./slot-box";
import { Card } from "../../common/components/card";

export function ChartLegend({ chartState = {} }) {
  const {
    state: status,
    lowestSlotPriceInWEI,
    currentPriceInWEI,
    initialPriceInWEI,
    freeSlotsCount,
    maxSlotsCount,
    takenSlotsCount,
    remainingSeconds,
    secondsBeforeStart,
  } = chartState;

  return (
    <section className="container mx-auto px-4">
      <Card className="py-6">
        <CurrentPrice
          status={status}
          lowestSlotPriceInWEI={lowestSlotPriceInWEI}
          currentPriceInWEI={currentPriceInWEI}
          initialPriceInWEI={initialPriceInWEI}
        />
        <div>
          <Status
            status={status}
            remainingSeconds={remainingSeconds}
            secondsBeforeStart={secondsBeforeStart}
          />
        </div>
        <SlotBox label="Free Slot/s" value={freeSlotsCount} />
        <SlotBox label="Max Slots" value={maxSlotsCount} />
        <SlotBox label="Taken Slot/s" value={takenSlotsCount} />
      </Card>
    </section>
  );
}
