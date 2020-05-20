export default class ChartState {
  constructor() {
    this.initialPropertiesSet = false
  }

  updateChart(params = {}) {
    this.chart.update(params)
  }

  decrementRemainingSeconds() {
    if (this.remainingSeconds) {
      this.remainingSeconds = this.remainingSeconds - 1
    }
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
