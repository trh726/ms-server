"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformTime = void 0;
const iso8601_duration_1 = require("iso8601-duration");
function transformTime(duration) {
    const timeObject = iso8601_duration_1.parse(duration);
    let returnTime = {};
    for (const [unit, time] of Object.entries(timeObject)) {
        if (time && time != 0) {
            returnTime = { ...returnTime, [unit]: time };
        }
    }
    return returnTime;
}
exports.transformTime = transformTime;
