import React from "react";
import { Card } from "../../common/components/card";
export function ChartKey(props) {
  return (
    <Card className="bg-rich-black py-4 md:h-14 h-10 md:w-44 w-36 md:rounded-2xl md:-mb-4 -mb-12 md:mr-8 mr-4">
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="md:h-6 h-4 md:w-6 w-4 rounded-full bg-dark-green"></div>
          <div className="text-dark-green md:text-base text-sm">Price</div>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="md:h-6 h-4 md:w-6 w-4 rounded-full bg-majorelle-blue-lighter border-majorelle-blue md:border-8 border-4"></div>
          <div className="text-majorelle-blue-lighter md:text-base text-sm">
            Bid
          </div>
        </div>
      </div>
    </Card>
  );
}
