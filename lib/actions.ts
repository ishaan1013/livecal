"use server";

import { revalidatePath } from "next/cache";
import prisma from "../prisma";

export async function createTask(path: string, dateId: string) {
  console.log("created");

  const task = await prisma.task.create({
    data: {
      text: "New Task",
      checked: false,
      dateId,
      label: "RED",
    },
  });

  revalidatePath("/editor/" + path);
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
