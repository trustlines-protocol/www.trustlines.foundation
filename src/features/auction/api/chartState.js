export default class ChartState {
  constructor() {
    this.takenSlotsCount = 36;
    this.freeSlotsCount = 35;
    this.maxSlotsCount = 40;
    this.minSlotsCount = 50;
    this.state = "Finished";
    this.lowestSlotPriceInWEI = 1000000000000000000;
    this.currentPriceInWEI = 1000000000000000000;
    this.initialPriceInWEI = 1000000000000000000;
    this.currentBlocktimeInMs = 12000000;
  }

  updateChart(params = {}) {
    this.chart.update(params);
  }

  decrementTimers() {
    if (this.remainingSeconds) {
      this.remainingSeconds = this.remainingSeconds - 1;
    }
    this.secondsBeforeStart =
      +process.env.AUCTION_START_TIMESTAMP - Math.round(new Date() / 1000);
  }

  mergeRestResult(result) {
    this.takenSlotsCount = result.takenSlotsCount;
    this.freeSlotsCount = result.freeSlotsCount;
    this.maxSlotsCount = result.maxSlotsCount;
    this.minSlotsCount = result.minSlotsCount;
    this.state = result.state;
    this.lowestSlotPriceInWEI = result.lowestSlotPriceInWEI;
    this.currentPriceInWEI = result.currentPriceInWEI;
    this.initialPriceInWEI = result.initialPriceInWEI;
    this.currentBlocktimeInMs = result.currentBlocktimeInMs;
    if (!this.remainingSeconds) {
      this.remainingSeconds = result.remainingSeconds;
    }
  }
}
