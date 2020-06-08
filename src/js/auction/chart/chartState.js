export default class ChartState {
  constructor() {
    this.initialPropertiesSet = false
  }

  updateChart(params = {}) {
    this.chart.update(params)
  }

  decrementTimers() {
    if (this.remainingSeconds) {
      this.remainingSeconds = this.remainingSeconds - 1
    }
    this.secondsBeforeStart =
      +process.env.AUCTION_START_TIMESTAMP - Math.round(new Date() / 1000)
  }

  mergeRestResult(result) {
    this.takenSlotsCount = result.takenSlotsCount
    this.freeSlotsCount = result.freeSlotsCount
    this.maxSlotsCount = result.maxSlotsCount
    this.minSlotsCount = result.minSlotsCount
    this.state = result.state
    this.lowestSlotPriceInWEI = result.lowestSlotPriceInWEI
    this.currentPriceInWEI = result.currentPriceInWEI
    this.initialPriceInWEI = result.initialPriceInWEI
    this.currentBlocktimeInMs = result.currentBlocktimeInMs
    if (!this.initialPropertiesSet) {
      this.remainingSeconds = result.remainingSeconds
    }

    this.initialPropertiesSet = true
  }
}
