export const secToMiliSec = (seconds: number): number => seconds * 1000;
export const minToMiliSec = (minutes: number): number =>
  minutes * secToMiliSec(60);
export const hoursToMiliSec = (hours: number): number =>
  hours * minToMiliSec(60);
