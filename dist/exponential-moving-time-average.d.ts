/**
 * 每次访问的 now 参数必须单调非严格递增。
 */
declare class ExponentialMovingTimeAverage {
    private T;
    private lastTime;
    private stableValue;
    private initializationConstant;
    /**
     * @param T half-life in ms
     */
    constructor(T: number);
    private attenuationRatio;
    get(now?: number): number;
    set(newValue: number, now?: number): number;
}
export default ExponentialMovingTimeAverage;
export { ExponentialMovingTimeAverage };
