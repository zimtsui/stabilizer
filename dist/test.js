"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const stabilizer = new index_1.Stabilizer(1000);
setInterval(() => {
    console.log(stabilizer.set(1000));
}, 1000);
//# sourceMappingURL=test.js.map