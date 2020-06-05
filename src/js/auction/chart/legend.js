import $ from "jquery"
import { formatTLNAmount } from "../../common/math"

const currentPrice = $("#current-price")
const currentPriceDesc = $("#current-price-desc")

function formatSecondsToString(seconds) {
  if (!seconds) {
    return undefined
  }
  const s = seconds % 60
  const m = Math.floor((seconds % 3600) / 60)
  const h = Math.floor((seconds % 86400) / 3600)
  const d = Math.floor(seconds / 86400)
  return `${d}d ${h}h ${m}m ${s}s`
}

export function renderState(chartState) {
  let timeString = chartState.state
  if (timeString === "Started") {
    timeString = formatSecondsToString(chartState.remainingSeconds)
  } else if (
    timeString === "Not Started" &&
    chartState.secondsBeforeStart > 0
  ) {
    timeString = formatSecondsToString(chartState.secondsBeforeStart)
  }
  $("#remaining-time").html(timeString)
}

export function renderSlots(chartState) {
  $("#slots-taken").html(chartState.takenSlotsCount)
  $("#slots-free").html(chartState.freeSlotsCount)
  $("#slots-max").html(chartState.maxSlotsCount)
  $("#slots-min").html(chartState.minSlotsCount)
}

export function renderCurrentPrice(chartState) {
  let price
  if (
    chartState.state === "Finished" ||
    chartState.state === "Deposit Pending"
  ) {
    currentPriceDesc.html("Lowest Slot Price")
    price = chartState.lowestSlotPriceInWEI
  } else if (chartState.state === "Started") {
    currentPriceDesc.html("Current Slot Price")
    price = chartState.currentPriceInWEI
  } else if (chartState.state === "Not Started") {
    currentPriceDesc.html("Initial Slot Price")
    price = chartState.initialPriceInWEI
  } else {
    currentPriceDesc.hide()
    currentPrice.hide()
    return
  }

  currentPrice.html(formatTLNAmount(price))
  currentPriceDesc.show()
  currentPrice.show()
}

export default function initLegend(chartState) {
  setInterval(() => {
    chartState.decrementTimers()
    renderState(chartState)
  }, 1000)
}
