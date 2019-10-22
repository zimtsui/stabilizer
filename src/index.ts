class Stabilizer {
    private lastTime = Number.NEGATIVE_INFINITY;
    private stableValue = 0;
    private initializationConstant: number;

    /**
     * @param T half-life in ms
     */
    constructor(private T: number) {
        this.initializationConstant = Math.LN2 / this.T;
    }

    private attenuationRatio(period: number) {
        return Math.pow(1 / 2, period / this.T);
    }

    get(now = Date.now()): number {
        return this.stableValue
            * this.attenuationRatio(now - this.lastTime);
    }

    set(newValue: number, now = Date.now()): number {
        const period = now - this.lastTime;
        this.stableValue
            = this.stableValue * this.attenuationRatio(period)
            + newValue * this.initializationConstant;
        this.lastTime = now;
        return this.stableValue;
    }
}

export default Stabilizer;
export { Stabilizer };