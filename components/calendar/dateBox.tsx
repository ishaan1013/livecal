"use client";

import { useViewStore } from "@/lib/state/view";
import Link from "next/link";

type emptyT = {
  empty: true;
};

type dayT = {
  empty: false;
  day: number;
  events: string[];
};

export default function DateBox(props: emptyT | dayT) {
  if (props.empty === true) {
    return <div className="w-full h-full bg-background "></div>;
  }

  const { day, events } = props;

  const month = useViewStore((state) => state.month);
  const year = useViewStore((state) => state.year);

  return (
    <Link
      href={`dashboard/${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`}
      className="w-full h-full flex flex-col cursor-pointer justify-between hover:bg-neutral-950 items-start bg-background p-2"
    >
      <div className="text-center font-medium text-neutral-600 text-sm">
        {day}
      </div>
      <div className="w-full space-y-0.5">
        {events.slice(0, 2).map((event, i) => (
          <div
            key={`event-${i}`}
            className="w-full rounded px-1 py-0.5 bg-muted text-xs"
          >
            {event}
          </div>
        ))}
        {events.length > 2 ? (
          <div className="w-full rounded px-1 py-0.5 text-neutral-400 bg-muted text-xs">
            + {events.length - 2} more
          </div>
        ) : null}
      </div>
    </Link>
  );
}
