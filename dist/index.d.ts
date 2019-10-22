declare class Stabilizer {
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
export default Stabilizer;
export { Stabilizer };
