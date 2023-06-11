import { auth } from "@clerk/nextjs";
import prisma from "@/prisma";

export const setupView = async (params: { month: string; year: string }) => {
  const { month, year } = params;

  const user = auth();

  // if (user.userId) {
  const monthView = await prisma.monthView.findUnique({
    where: {
      MonthViewId: {
        monthYear: `${year}-${month}`,
        user: user.userId!,
      },
    },
    include: {
      dates: {
        include: {
          tasks: true,
        },
      },
    },
  });

  if (monthView) {
    console.log("monthView", monthView);
    return monthView;
  } else {
    const newMonthView = await prisma.monthView.create({
      data: {
        monthYear: `${year}-${month}`,
        user: user.userId!,
      },
      include: {
        dates: {
          include: {
            tasks: true,
          },
        },
      },
    });
    console.log("newMonthView", newMonthView);
    return newMonthView;
    // return null;
  }
  // }
};
