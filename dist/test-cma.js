"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const stabilizer = new index_1.ContinuousMovingAverage(10);
stabilizer.set(1, 5);
console.log(stabilizer.get(8)); // 1
stabilizer.set(2, 15);
console.log(stabilizer.get(25)); // 2
stabilizer.set(3, 25);
console.log(stabilizer.get(30)); // 2.5
stabilizer.set(1, 100);
stabilizer.set(2, 101);
stabilizer.set(3, 102);
stabilizer.set(4, 102);
stabilizer.set(5, 103);
stabilizer.set(6, 104);
console.log(stabilizer.get(110)); // 4.8
//# sourceMappingURL=test-cma.js.map