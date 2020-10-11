import { parse as durationParse } from "iso8601-duration";

export interface DurationObject {
  weeks?: number;
  years?: number;
  months?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export interface CookTime {
  prep?: DurationObject;
  cook?: DurationObject;
  active?: DurationObject;
  total?: DurationObject;
}

export function transformTime(duration: string): DurationObject {
  const timeObject = durationParse(duration);
  let returnTime = {};
  for (const [unit, time] of Object.entries(timeObject)) {
    if (time && time != 0) {
      returnTime = { ...returnTime, [unit]: time };
    }
  }
  return returnTime;
}
