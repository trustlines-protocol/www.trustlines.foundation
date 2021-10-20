import React from "react";

import initChart from "../api/chart";
import { ChartKey } from "./chart-key";

export function Chart(props) {
  React.useEffect(() => {
    if (props.chartState) {
      initChart(props.chartState);
    }
  }, [props.chartState]);

  return (
    <div className="md:container mx-auto px-1 md:px-12 flex flex-col md:my-32 my-10 w-screen md:px-16 px-4">
      <div className="flex flex-row justify-end md:-mb-4 mb-4 z-20 px-4">
        <ChartKey />
      </div>
      <div>
        <div className="bg-gradient-to-tr from-rich-black to-rich-black-lighter rounded-2xl p-4 text-off-white md:h-96 h-72">
          <canvas id="bids"></canvas>
          <div className="chartjs-tooltip" id="tooltip"></div>
        </div>
      </div>
    </div>
  );
}
