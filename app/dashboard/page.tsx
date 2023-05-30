import DateBox from "@/components/calendar/dateBox";
import DateSelect from "@/components/calendar/dateSelect";
import { daysInMonth, emptyEndDays, emptyStartDays } from "@/lib/utils";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Dashboard() {
  const start = emptyStartDays(5, 2023);
  const mid = daysInMonth(5, 2023);
  const end = emptyEndDays(5, 2023);

  return (
    <div className="w-screen p-8 bg-muted flex-grow flex flex-col">
      <div className="flex w-full justify-between items-center">
        <DateSelect />
        <div className="bg-background w-9 rounded-full h-9" />
      </div>
      <div className="mt-4 w-full flex-grow relative overflow-hidden flex flex-col min-h-[600px] gap-[1px] bg-accent p-[1px] rounded-xl">
        <div className="w-full gap-[1px] grid grid-cols-7 mb-[1px]">
          {weekDays.map((day, i) => (
            <div
              key={i}
              className="py-3 font-medium bg-background text-neutral-600 w-full text-center"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="w-full gap-[1px] flex-grow grid grid-cols-7 grid-rows-5">
          {/* <div className="w-full h-full flex flex-col cursor-pointer justify-between hover:bg-neutral-950 items-start bg-background p-2">
            <div className="text-center font-medium text-neutral-600 text-sm">
              1
            </div>
            <div className="w-full space-y-0.5">
              <div className="w-full rounded px-1 py-0.5 bg-muted text-xs">
                event
              </div>
              <div className="w-full rounded px-1 py-0.5 bg-muted text-xs">
                event
              </div>
              <div className="w-full rounded px-1 py-0.5 text-neutral-400 bg-muted text-xs">
                + _ more
              </div>
            </div>
          </div> */}

          {[...Array(start)].map((x, i) => (
            <DateBox empty={true} key={`start-${i}`} />
          ))}
          {[...Array(mid)].map((x, i) => (
            <DateBox
              key={`mid-${i}`}
              empty={false}
              day={i + 1}
              events={["e1", "e2", "e3", "e4"]}
            />
          ))}
          {[...Array(end)].map((x, i) => (
            <DateBox empty={true} key={`end-${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
