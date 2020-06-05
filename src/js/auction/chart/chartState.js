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
    if (this.secondsBeforeStart) {
      this.secondsBeforeStart -= 1
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
      this.secondsBeforeStart = result.secondsBeforeStart
    }

    this.initialPropertiesSet = true
  }
}
