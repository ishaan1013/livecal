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

const labelColors = {
  RED: "absolute left-0 top-0 w-1 h-full bg-red-500",
  ORANGE: "absolute left-0 top-0 w-1 h-full bg-orange-500",
  YELLOW: "absolute left-0 top-0 w-1 h-full bg-yellow-500",
  GREEN: "absolute left-0 top-0 w-1 h-full bg-green-500",
  BLUE: "absolute left-0 top-0 w-1 h-full bg-blue-500",
  PURPLE: "absolute left-0 top-0 w-1 h-full bg-purple-500",
  PINK: "absolute left-0 top-0 w-1 h-full bg-pink-500",
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
      className="w-full h-full flex flex-col duration-150 group cursor-pointer justify-between hover:bg-[#070707] items-start bg-background md:p-2 sm:p-1.5 xs:p-1 p-0.5"
    >
      <div className="text-center font-medium mb-3 duration-150 group-hover:text-neutral-400 text-neutral-600 text-sm">
        {day}
      </div>
      <div className="w-full space-y-0.5 min-h-[40px] whitespace-nowrap overflow-hidden text-ellipsis">
        {tasks ? (
          <>
            {tasks.slice(0, 2).map((task, i) => (
              <div
                key={`event-${i}`}
                className="w-full rounded overflow-hidden relative pr-1 pl-2 py-0.5 bg-muted text-xs"
              >
                <div className={labelColors[task.label]} />
                {task.text}
              </div>
            ))}
            {tasks.length > 2 ? (
              <div className="w-full rounded px-1 py-0.5 text-neutral-400 bg-muted text-xs">
                + {tasks.length - 2} more
              </div>
            ) : null}
          </>
        ) : null}
      </div>
    </Link>
  );
}
