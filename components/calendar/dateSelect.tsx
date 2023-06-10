"use client";

import { useViewStore } from "@/lib/state/view";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DateSelect() {
  const month = useViewStore((state) => state.month);
  const year = useViewStore((state) => state.year);
  const setMonth = useViewStore((state) => state.setMonth);
  const setYear = useViewStore((state) => state.setYear);

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
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handlePlus = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
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
