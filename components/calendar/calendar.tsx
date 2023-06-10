"use client";

// import { useEffect, useTransition } from "react";
import DateBox from "./dateBox";

// import { useViewStore } from "@/lib/state/view";
import { daysInMonth, emptyEndDays, emptyStartDays } from "@/lib/utils";

export default function Calendar({
  month,
  year,
}: {
  month: number;
  year: number;
}) {
  // const month = useViewStore((state) => state.month);
  // const year = useViewStore((state) => state.year);

  const start = emptyStartDays(month, year);
  const mid = daysInMonth(month, year);
  const end = emptyEndDays(mid, start);

  return (
    <div className="w-full gap-[1px] flex-grow grid grid-cols-7 grid-rows-5">
      {start ? (
        <>
          {[...Array(start).keys()].map((x, i) => (
            <DateBox empty={true} key={`start-${i}`} />
          ))}
        </>
      ) : null}
      {mid ? (
        <>
          {[...Array(mid).keys()].map((x, i) => (
            <DateBox
              key={`mid-${i}`}
              empty={false}
              day={i + 1}
              events={["e1", "e2", "e3", "e4"]}
            />
          ))}
        </>
      ) : null}

      {end ? (
        <>
          {[...Array(end).keys()].map((x, i) => (
            <DateBox empty={true} key={`end-${i}`} />
          ))}
        </>
      ) : null}
    </div>
  );
}
