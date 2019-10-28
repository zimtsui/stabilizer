/**
 * 每次访问的 now 参数必须单调非严格递增。
 */
declare class ContinuousMovingAverage {
    private reserveFor;
    private q;
    private sum;
    private calcSumCount;
    constructor(reserveFor: number);
    private clean;
    get(now?: number): number;
    set(value: number, now?: number): number;
    private reCalcSum;
}
export default ContinuousMovingAverage;
export { ContinuousMovingAverage };
