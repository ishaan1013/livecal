"use client";

import { useViewStore } from "@/lib/state/view";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function DateSelect({
  month,
  year,
}: {
  month: number;
  year: number;
}) {
  // const month = useViewStore((state) => state.month);
  // const year = useViewStore((state) => state.year);
  // const setMonth = useViewStore((state) => state.setMonth);
  // const setYear = useViewStore((state) => state.setYear);

  const router = useRouter();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleMinus = () => {
    if (month === 1) {
      const newMonth = "12";
      // setMonth(12);
      const newYear = year.toString();
      // setYear(year - 1);

      router.push(`/dashboard/${newYear}/${newMonth}`);
    } else {
      const newMonth = (month - 1).toString().padStart(2, "0");
      // setMonth(month - 1);
      const newYear = year.toString();

      router.push(`/dashboard/${newYear}/${newMonth}`);
    }
  };

  const handlePlus = () => {
    if (month === 12) {
      // setMonth(1);
      const newMonth = "01";
      // setYear(year + 1);
      const newYear = year.toString();

      router.push(`/dashboard/${newYear}/${newMonth}`);
    } else {
      const newMonth = (month + 1).toString().padStart(2, "0");

      // setMonth(month + 1);
      const newYear = year.toString();

      router.push(`/dashboard/${newYear}/${newMonth}`);
    }
  };

  return (
    <div className="space-x-1 flex items-center justify-center">
      <button
        onClick={handleMinus}
        className="flex items-center justify-center h-9 w-9 rounded-md hover:bg-accent text-accent-foreground"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <div className="text-xl font-semibold">
        {months[month - 1]} {year}
      </div>
      <button
        onClick={handlePlus}
        className="flex items-center justify-center h-9 w-9 rounded-md hover:bg-accent text-accent-foreground"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      <Button variant="ghost" size="sm">
        Today
      </Button>
    </div>
  );
}
