"use server";

import { revalidatePath } from "next/cache";

export async function setupView(month: string, year: string) {
  // for viewing a month on the dashboard calendar
  // FINDUNIQUE the month view, include relations (existing days and tasks)
  // if null:
  // CREATE month view, return empty
  // return month view
}

export async function setupDay(month: string, year: string, day: string) {
  // for after clicking a day on the calendar
  // if day exists from setupView, use that data
  // else:
  // CREATE day view, return empty
}

export async function createTask(text: string) {
  // CREATE task, return status
}

export async function updateTask(id: string, text: string) {
  // UPDATE task, return status
}

export async function checkTask(id: string, checked: boolean) {
  // UPDATE task, return status
}

export async function deleteTask(id: string) {
  // DELETE task, return status
}
