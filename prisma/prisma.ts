import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["info", "warn", "error"],
  });

if (process.env.VERCEL_ENV !== "production") global.prisma = prisma;
