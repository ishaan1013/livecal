"use client";

import DateBox from "./dateBox";

import { Date, MonthView, Task } from "@prisma/client";
import { daysInMonth, emptyEndDays, emptyStartDays } from "@/lib/utils";

export default function Calendar({
  month,
  year,
  view,
}: {
  month: number;
  year: number;
  view: MonthView & {
    dates: (Date & {
      tasks: Task[];
    })[];
  };
}) {
  const start = emptyStartDays(month, year);
  const mid = daysInMonth(month, year);
  const end = emptyEndDays(mid, start);

  const viewDates = view.dates;

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
              data={viewDates.filter((d) => d.day === i + 1)[0]}
              day={i + 1}
              month={month}
              year={year}
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
    // <pre>{JSON.stringify(view, null, 2)}</pre>
  );
}
