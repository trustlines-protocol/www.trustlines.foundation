import $ from "jquery"
import initCollapsibles from "./collapsibles"
import initModal from "./termsAndConditionsModal"
import initChart from "./chart"
import initLegend from "./legend"
import ChartState from "./chartState"
import ReactDOM from "react-dom"
import React from "react"
import AuctionApp from "./App"

$(() => {
  const chartState = new ChartState()

  initCollapsibles()
  initModal()
  initLegend(chartState)
  initChart(chartState)
})

ReactDOM.render(<AuctionApp />, document.getElementById("rootAuctionApp"))
