import React from "react";
import { Card } from "../../common/components/card";
export function ChartKey(props) {
  return (
    <Card className="bg-rich-black py-4 h-14 w-44 md:rounded-2xl">
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-dark-green"></div>
          <div className="text-dark-green">Price</div>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-majorelle-blue-lighter border-majorelle-blue border-8"></div>
          <div className="text-majorelle-blue-lighter">Bid</div>
        </div>
      </div>
    </Card>
  );
}
