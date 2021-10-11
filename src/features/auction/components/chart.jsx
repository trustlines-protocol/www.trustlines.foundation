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
    <div className="container mx-auto flex flex-col my-32">
      <div className="flex flex-row justify-end">
        <ChartKey />
      </div>
      <div>
        <div className="chart-container bg-gradient-to-tr from-rich-black to-rich-black-lighter rounded-2xl p-4 text-off-white">
          <canvas id="bids"></canvas>
          <div className="chartjs-tooltip" id="tooltip"></div>
        </div>
      </div>
    </div>
  );
}
