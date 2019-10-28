import { Queue } from 'queue';

interface Interval {
    value: number;
    startTime: number;
}

/**
 * 每次访问的 now 参数必须单调非严格递增。
 */
class ContinuousMovingAverage {
    private q = new Queue<Interval>();
    private sum = 0; // 除首末元素
    private calcSumCount = 0; // sum 有误差，不定期重算。

    constructor(private reserveFor: number) { }

    private clean(now = Date.now()): void {
        while (
            this.q.length >= 2
            && this.q[1].startTime < now - this.reserveFor
        ) {
            if (this.q.length >= 3) this.sum
                -= this.q[1].value
                * (this.q[2].startTime - this.q[1].startTime);
            this.q.shift();
        }
        if (
            this.q.length
            && this.q[0].startTime < now - this.reserveFor
        ) this.q[0].startTime = now - this.reserveFor;
    }

    public get(now = Date.now()): number {
        this.clean(now);
        if (this.q.length === 0) return 0;
        if (this.q.length === 1) return this.q[0].value;
        return (
            this.q[0].value * (this.q[1].startTime - this.q[0].startTime)
            + this.sum
            + this.q[-1].value * (now - this.q[-1].startTime)
        ) / this.reserveFor;
    }

    public set(value: number, now = Date.now()): number {
        if (this.q.length)
            this.q.push({
                value, startTime: now,
            });
        else
            this.q.push({
                value,
                startTime: now - this.reserveFor,
            });
        if (this.q.length >= 3) this.sum
            += this.q[-2].value
            * (now - this.q[-2].startTime);
        if (++this.calcSumCount > this.q.length) this.reCalcSum();
        return this.get(now);
    }

    private reCalcSum(): void {
        this.calcSumCount = 0;
        this.sum = 0;
        for (let i = 1; i <= this.q.length - 2; i++)
            this.sum
                += this.q[i].value
                * (this.q[i + 1].startTime - this.q[i].startTime);
    }
}

export default ContinuousMovingAverage;
export { ContinuousMovingAverage };