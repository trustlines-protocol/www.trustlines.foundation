import $ from "jquery"
import initCollapsibles from "./collapsibles"
import initChart from "./chart/chart"
import initLegend from "./chart/legend"
import ChartState from "./chart/chartState"
import ReactDOM from "react-dom"
import React from "react"
import AuctionApp from "./bidbox/App"
import initModal from "./chart/revealContractAddress"

$(() => {
  const chartState = new ChartState()

  initCollapsibles()
  initLegend(chartState)
  initChart(chartState)
  initModal()
})

ReactDOM.render(<AuctionApp />, document.getElementById("rootAuctionApp"))
