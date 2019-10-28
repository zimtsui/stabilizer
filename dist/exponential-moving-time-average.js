"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 每次访问的 now 参数必须单调非严格递增。
 */
class ExponentialMovingTimeAverage {
    /**
     * @param T half-life in ms
     */
    constructor(T) {
        this.T = T;
        this.lastTime = Number.NEGATIVE_INFINITY;
        this.stableValue = 0;
        this.initializationConstant = Math.LN2 / this.T;
    }
    attenuationRatio(period) {
        return Math.pow(1 / 2, period / this.T);
    }
    get(now = Date.now()) {
        return this.stableValue
            * this.attenuationRatio(now - this.lastTime);
    }
    set(newValue, now = Date.now()) {
        const period = now - this.lastTime;
        this.stableValue
            = this.stableValue * this.attenuationRatio(period)
                + newValue * this.initializationConstant;
        this.lastTime = now;
        return this.stableValue;
    }
}
exports.ExponentialMovingTimeAverage = ExponentialMovingTimeAverage;
exports.default = ExponentialMovingTimeAverage;
//# sourceMappingURL=exponential-moving-time-average.js.map