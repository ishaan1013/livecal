import { UserButton } from "@clerk/nextjs";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Home() {
  return (
    <div className="w-screen p-8 bg-neutral-900 flex-grow flex flex-col">
      <div className="flex w-full justify-between items-center">
        <div className="bg-black w-24 rounded-full h-9" />
        <div className="space-x-3 flex items-center">
          <div className="bg-black w-9 rounded-full h-9" />
          <div className="space-x-1 flex items-center">
            <div>{"<"}</div>
            <div>May</div>
            <div>{">"}</div>
          </div>
        </div>
      </div>
      <div className="mt-4 w-full flex-grow relative overflow-hidden flex flex-col gap-[1px] bg-neutral-800 p-[1px] rounded-md">
        <div className="w-full gap-[1px] grid grid-cols-7 mb-[1px]">
          {weekDays.map((day, i) => (
            <div
              key={i}
              className="py-3 font-medium bg-black text-neutral-600 w-full text-center"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="w-full gap-[1px] flex-grow grid grid-cols-7 grid-rows-5">
          <div className="w-full h-full flex flex-col justify-between items-start bg-black p-2">
            <div className="text-center font-medium text-neutral-600 text-sm">
              1
            </div>
            <div className="w-full space-y-0.5">
              <div className="w-full rounded-md px-1.5 py-1 bg-neutral-800 text-xs">
                event
              </div>
              <div className="w-full rounded-md px-1.5 py-1 bg-neutral-800 text-xs">
                event
              </div>
              <div className="w-full rounded-md px-1.5 py-1 text-neutral-400 bg-neutral-800 text-xs">
                + _ more
              </div>
            </div>
          </div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
          <div className="w-full h-full bg-black p-2"></div>
        </div>
      </div>
    </div>
  );
}
