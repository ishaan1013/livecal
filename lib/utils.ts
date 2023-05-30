import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// date helpers

export function emptyStartDays(m: number, y: number) {
  const res =
    (new Date(`${y}-${m.toString().padStart(2, "0")}-01`).getDay() + 1) % 7;
  return res;
}

export function daysInMonth(m: number, y: number) {
  return new Date(y, m, 0).getDate();
}

export function emptyEndDays(m: number, y: number) {
  return 35 - daysInMonth(m, y) - emptyStartDays(m, y);
}
