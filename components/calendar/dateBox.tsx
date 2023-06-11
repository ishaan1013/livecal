"use client";

import { useViewStore } from "@/lib/state/view";
import { Date, Task } from "@prisma/client";
import Link from "next/link";

type emptyT = {
  empty: true;
};

type dayT = {
  empty: false;
  day: number;
  data: Date & {
    tasks: Task[];
  };
  month: number;
  year: number;
};

export default function DateBox(props: emptyT | dayT) {
  if (props.empty === true) {
    return <div className="w-full h-full bg-background "></div>;
  }

  const { day, month, year, data } = props;

  const tasks = data?.tasks ?? undefined;

  return (
    <Link
      href={`editor/${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`}
      className="w-full h-full flex flex-col cursor-pointer justify-between hover:bg-neutral-950 items-start bg-background p-2"
    >
      <div className="text-center font-medium mb-3 text-neutral-600 text-sm">
        {day}
      </div>
      {tasks ? (
        <div className="w-full space-y-0.5 min-h-[70px]">
          {tasks.slice(0, 2).map((task, i) => (
            <div
              key={`event-${i}`}
              className="w-full rounded px-1 py-0.5 bg-muted text-xs"
            >
              {task.text}
            </div>
          ))}
          {tasks.length > 2 ? (
            <div className="w-full rounded px-1 py-0.5 text-neutral-400 bg-muted text-xs">
              + {tasks.length - 2} more
            </div>
          ) : null}
        </div>
      ) : null}
    </Link>
  );
}
