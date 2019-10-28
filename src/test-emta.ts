import { ExponentialMovingTimeAverage as EMTA } from './index';

const stabilizer = new EMTA(1000);

setInterval(() => {
    console.log(stabilizer.set(1000));
}, 1000);