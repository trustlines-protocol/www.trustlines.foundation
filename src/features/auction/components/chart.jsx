import React from "react";

import initChart from "../api/chart";

export function Chart(props) {
  React.useEffect(() => {
    if (props.chartState) {
      initChart(props.chartState);
    }
  }, [props.chartState]);

  return (
    <div className="container mx-auto my-32">
      <div className="chart-container">
        <canvas id="bids"></canvas>
        <div className="chartjs-tooltip" id="tooltip"></div>
      </div>
    </div>
  );
}
