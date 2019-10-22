import { Stabilizer } from './index';

const stabilizer = new Stabilizer(1000);

setInterval(() => {
    console.log(stabilizer.set(1000));
}, 1000);