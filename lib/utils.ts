import { Label } from "@prisma/client";
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
  const res = new Date(y, m, 0).getDate();
  return res;
}

export function emptyEndDays(monthDays: number, startDays: number) {
  const baseSum = monthDays + startDays;
  const base = baseSum > 28 ? (baseSum > 35 ? 42 : 35) : 28;

  const res = base - monthDays - startDays;
  return res;
}

export function getUserLabel(user: string) {
  const labels: Label[] = [
    "RED",
    "ORANGE",
    "YELLOW",
    "GREEN",
    "BLUE",
    "PURPLE",
    "PINK",
  ];

  if (!user) return labels[0];
  return labels[user.length % labels.length];
}
