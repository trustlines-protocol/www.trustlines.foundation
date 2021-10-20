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
    <section className="container md:mx-auto md:px-16 px-4">
      <Card className="bg-grey-lighter py-6 px-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <CurrentPrice
              status={status}
              lowestSlotPriceInWEI={lowestSlotPriceInWEI}
              currentPriceInWEI={currentPriceInWEI}
              initialPriceInWEI={initialPriceInWEI}
            />
          </div>
          <div className="flex flex-row items-center justify-center">
            <Status
              status={status}
              remainingSeconds={remainingSeconds}
              secondsBeforeStart={secondsBeforeStart}
            />
          </div>
          <div className="flex flex-row items-center justify-center space-x-6 md:space-x-6">
            <SlotBox label="Free Slot/s" value={freeSlotsCount} />
            <SlotBox label="Max Slots" value={maxSlotsCount} />
            <SlotBox label="Taken Slot/s" value={takenSlotsCount} />
          </div>
        </div>
      </Card>
    </section>
  );
}
