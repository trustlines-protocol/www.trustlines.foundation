import $ from "jquery"
import moment from "moment-timezone"

import { formatTLNAmount } from "../../common/math"
import { renderState, renderSlots, renderCurrentPrice } from "./legend"

const loadingMessage = $("#loading-message")
const chartAddons = $(".chart-addons")
const chartContainer = $(".chart-container")

function getMessage(title, body) {
  return `
  <div>
    <div class="box has-text-centered is-background-gradient-light">
      <h1 class="subtitle is-2 has-text-weight-bold">
        ${title}
        <br />
        <span class="icon is-large">
          <i class="fas fa-exclamation-triangle fa-lg" />
        </span>
      </h1>
      <div class="has-text-grey has-text-centered">${body}</div>
    </div>
  </div>
  `
}

function getTooltipRow(chartState, dataPoint, point) {
  const row = []
  row.push(
    `${moment(dataPoint.xLabel).format(
      "MMM D, YYYY, h:mm:ss a"
    )} ${moment.tz.guess()}`
  )
  row.push(
    `${moment(dataPoint.xLabel)
      .tz("UTC")
      .format("MMM D, YYYY, h:mm:ss a")} UTC`
  )
  if (point.address) {
    row.push(`Bidder: ${point.address}`)
  }
  row.push(`Slot Price: ${formatTLNAmount(point.slotPrice)}`)
  return row
}

function calculateNowLabelAdjustment(currentBlocktimeInMs, mostMiddleElement) {
  if (mostMiddleElement && currentBlocktimeInMs > mostMiddleElement.x) {
    return 17
  }
  return -17
}

function buildNowLabel(currentBlocktimeInMs, priceFunction) {
  return {
    drawTime: "afterDatasetsDraw",
    annotations: [
      {
        type: "line",
        mode: "vertical",
        scaleID: "x-axis-0",
        value: currentBlocktimeInMs,
        borderColor: "rgb(23,64,120)",
        borderWidth: 2,
        label: {
          enabled: true,
          position: "bottom",
          content: "Now",
          xAdjust: calculateNowLabelAdjustment(
            currentBlocktimeInMs,
            priceFunction[Math.round((priceFunction.length - 1) / 2)]
          ),
        },
      },
    ],
  }
}

function renderChart(bids, priceFunction, chartState) {
  let verticalLineAnnotation
  if (chartState.remainingSeconds === 0 || chartState.state !== "Started") {
    verticalLineAnnotation = {}
  } else {
    verticalLineAnnotation = buildNowLabel(
      chartState.currentBlocktimeInMs,
      priceFunction
    )
  }

  const ctx = window.document.getElementById("bids").getContext("2d")
  const chart = new window.Chart(ctx, {
    type: "line",
    data: {
      datasets: [
        {
          label: "Price Function",
          data: priceFunction,
          borderColor: "rgb(135,75,160)",
          fill: false,
          pointRadius: 0,
          pointHitRadius: 1,
          pointHoverRadius: 0,
        },
        {
          type: "bubble",
          label: "Bid Price",
          data: bids,
          borderColor: "rgb(116,190,226)",
          pointHitRadius: 1,
          fill: false,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: false,
      },
      annotation: verticalLineAnnotation,
      scales: {
        xAxes: [
          {
            id: "x-axis-0",
            type: "time",
            time: {
              unit: "day",
              displayFormats: {
                day: "MMM DD",
              },
            },
          },
        ],
        yAxes: [
          {
            id: "y-axis-0",
            type: "logarithmic",
            ticks: {
              callback: function(value, index) {
                const formattedValue = formatTLNAmount(value)
                if (formattedValue.startsWith(1) || index === 0) {
                  return formattedValue
                }
                return ""
              },
            },
          },
        ],
      },
      hover: {
        mode: "x",
        intersect: false,
        animationDuration: 0,
      },
      tooltips: {
        mode: "x",
        intersect: false,
        enabled: false,
        custom: function(tooltip) {
          $(this._chart.canvas).css("cursor", "pointer")
          const positionY = this._chart.canvas.offsetTop
          const positionX = this._chart.canvas.offsetLeft
          $(".chartjs-tooltip").css({
            opacity: 0,
          })
          if (!tooltip || !tooltip.opacity) {
            return
          }
          if (tooltip.dataPoints.length > 0) {
            let slotPriceSet = false
            const tooltipContent = []
            const offsetY = tooltip.dataPoints[0].y
            const offsetX = tooltip.dataPoints[0].x
            for (const dataPoint of tooltip.dataPoints) {
              const point = this._data.datasets[dataPoint.datasetIndex].data[
                dataPoint.index
              ]
              if (!point.address) {
                if (slotPriceSet) {
                  continue
                }
                slotPriceSet = true
              }
              tooltipContent.push(
                getTooltipRow(chartState, dataPoint, point).join("<br/>")
              )
            }
            const $tooltip = $("#tooltip")
            $tooltip.html(
              tooltipContent.join('<hr style="border: 1px solid white"/>')
            )
            const showTooltipAboveCursor =
              offsetY > this._chart.canvas.offsetHeight / 2
            if (showTooltipAboveCursor) {
              $tooltip.css({
                opacity: 1,
                top: positionY + offsetY - 5 + "px",
                left: positionX + offsetX + "px",
              })
              $tooltip.addClass("chartjs-tooltip-above")
              $tooltip.addClass("chart-js-tooltop-arrow-bottom")
              $tooltip.removeClass("chartjs-tooltip-arrow-top")
            } else {
              $tooltip.css({
                opacity: 1,
                top: positionY + offsetY + 5 + "px",
                left: positionX + offsetX + "px",
              })
              $tooltip.removeClass("chartjs-tooltip-above")
              $tooltip.removeClass("chart-js-tooltop-arrow-bottom")
              $tooltip.addClass("chartjs-tooltip-arrow-top")
            }
          }
        },
      },
    },
  })
  window.Chart.defaults.global.defaultFontFamily = "Gothic A1"
  window.Chart.defaults.global.defaultFontSize = 16

  chartState.chart = chart
}

function fetchAuctionDataAndRender(chartState, animationDuration = 800) {
  $.ajax({
    url: `${process.env.AUCTION_API_URL}`,
    success: result => {
      if (result.state === "Not Deployed") {
        loadingMessage.show()
        loadingMessage.html(
          getMessage(
            "Not yet deployed",
            "The auction has not been deployed yet"
          )
        )
        chartAddons.hide()
        chartContainer.hide()
        return
      }
      chartState.mergeRestResult(result)

      loadingMessage.hide()
      chartAddons.show()
      chartContainer.show()

      const bidPrice = []
      const priceFunction = []
      for (const bid of result.bids) {
        bidPrice.push({
          address: bid.bidder,
          bidValue: parseInt(bid.bidValue, 16),
          slotPrice: parseInt(bid.slotPrice, 16),
          y: parseInt(bid.bidValue, 16),
          x: bid.timestamp * 1000,
        })
      }
      for (const functionPoint of result.priceFunction) {
        priceFunction.push({
          slotPrice: parseInt(functionPoint.slotPrice, 16),
          y: parseInt(functionPoint.slotPrice, 16),
          x: functionPoint.timestamp * 1000,
        })
      }
      let chart
      if (animationDuration > 0) {
        renderChart(bidPrice, priceFunction, chartState)
      } else {
        chart = chartState.chart
        chart.data.datasets[0].data = priceFunction
        chart.data.datasets[1].data = bidPrice
        if (result.remainingSeconds > 0) {
          if (
            chart.options.annotation &&
            chart.options.annotation.annotations
          ) {
            chart.options.annotation.annotations[0].value =
              chartState.currentBlocktimeInMs
            chart.options.annotation.annotations[0].label.xAdjust = calculateNowLabelAdjustment(
              chartState.currentBlocktimeInMs,
              priceFunction[Math.round((priceFunction.length - 1) / 2)]
            )
          } else {
            chart.options.annotation = buildNowLabel(
              chartState.currentBlocktimeInMs,
              priceFunction
            )
          }
        } else {
          chart.options.annotation = {}
        }
      }
      renderState(chartState)
      renderCurrentPrice(chartState)
      renderSlots(chartState)
      chartState.updateChart({ duration: animationDuration })
    },
    error: function(err) {
      loadingMessage.show()
      loadingMessage.html(
        getMessage(
          "&nbsp;Oops, something went wrong.",
          "There was an Error while retrieving auction data"
        )
      )
      chartAddons.hide()
      chartContainer.hide()
      console.error(err)
    },
  })
}

export default function initChart(chartState) {
  fetchAuctionDataAndRender(chartState, 800)
  setInterval(() => {
    fetchAuctionDataAndRender(chartState, 0)
  }, 20000)
}
