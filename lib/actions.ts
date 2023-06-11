// "use server";

// import { revalidatePath } from "next/cache";
// import prisma from "../prisma";

// export async function setupView(month: string, year: string) {
//   const monthView = prisma.monthView.findUnique({
//     where: {
//       monthYear: `${month}-${year}`,
//     },
//     include: {
//       dates: {
//         include: {
//           tasks: true,
//         },
//       },
//     },
//   });

//   if (monthView) {
//     return monthView;
//   } else {
//     const newMonthView = await prisma.monthView.create({
//       data: {
//         monthYear: `${month}-${year}`,
//         user: "test",
//       },
//     });
//     return newMonthView;
//   }
// }

// export async function setupDay(month: string, year: string, day: string) {
//   // for after clicking a day on the calendar
//   // if day exists from setupView, use that data
//   // else:
//   // CREATE day view, return empty
// }

// export async function createTask(text: string) {
//   // CREATE task, return status
// }

// export async function updateTask(id: string, text: string) {
//   // UPDATE task, return status
// }

// export async function checkTask(id: string, checked: boolean) {
//   // UPDATE task, return status
// }

// export async function deleteTask(id: string) {
//   // DELETE task, return status
// }
