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

  if (process.env.ENABLE_AUCTION_PARTICIPATION) {
    $.ajax({
      url: `${process.env.AUCTION_API_URL}`,
      success: result => {
        if (result.state === "Not Deployed") {
          // nothing to do here
          return
        }
        chartState.mergeRestResult(result)

        let title = "Withdraw excess from your bid"

        if (chartState.remainingSeconds >= 0) {
          title = "Participate in the auction"
        }
        ReactDOM.render(
          <AuctionApp title={title} />,
          document.getElementById("rootAuctionApp")
        )
      },
      error: function(err) {
        console.error(err)
      },
    })
  }
})
