import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// date helpers

export function emptyStartDays(m: number, y: number) {
  const res =
    (new Date(`${y}-${m.toString().padStart(2, "0")}-01`).getDay() + 1) % 7;
  // console.log("🚀 ~ file: utils.ts:12 ~ emptyStartDays ~ res:", res);
  // console.log([...Array(res).keys()]);

  return res;
}

export function daysInMonth(m: number, y: number) {
  const res = new Date(y, m, 0).getDate();
  // console.log("🚀 ~ file: utils.ts:19 ~ daysInMonth ~ res:", res);
  // console.log([...Array(res).keys()]);
  return res;
}

export function emptyEndDays(monthDays: number, startDays: number) {
  const baseSum = monthDays + startDays;
  const base = baseSum > 28 ? (baseSum > 35 ? 42 : 35) : 28;

  const res = base - monthDays - startDays;
  // console.log("🚀 ~ file: utils.ts:25 ~ emptyEndDays ~ res:", res);
  // console.log([...Array(res).keys()]);
  // console.log("");
  return res;
}
