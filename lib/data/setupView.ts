import { auth } from "@clerk/nextjs";
import prisma from "@/prisma";
import {
  SignedInAuthObject,
  SignedOutAuthObject,
} from "@clerk/nextjs/dist/server";

export const setupView = async (params: {
  month: string;
  year: string;
  user: SignedInAuthObject | SignedOutAuthObject;
}) => {
  const { month, year, user } = params;

  console.log("user: ", user);

  // if (user?.userId) {
  const org = user.orgId === undefined || user.orgId === null ? false : true;
  const viewId = org ? user.orgId : user.userId;

  const monthView = await prisma.monthView.findUnique({
    where: {
      MonthViewId: {
        monthYear: `${year}-${month}`,
        user: viewId!,
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
    return monthView;
  } else {
    const newMonthView = await prisma.monthView.create({
      data: {
        monthYear: `${year}-${month}`,
        user: viewId!,
        org,
      },
      include: {
        dates: {
          include: {
            tasks: true,
          },
        },
      },
    });
    return newMonthView;
  }
  // }
};
