import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserButton } from "@clerk/nextjs";
import { ChevronLeft, ChevronRight } from "lucide-react";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Dashboard() {
  return (
    <div className="w-screen p-8 bg-muted flex-grow flex flex-col">
      <div className="flex w-full justify-between items-center">
        <Tabs defaultValue="calendar" className="">
          <TabsList>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="list">List</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="space-x-3 flex items-center">
          <div className="bg-background w-9 rounded-full h-9" />
          <div className="space-x-0.5 flex w-36 justify-end items-center">
            <button className="p-1 rounded-full hover:bg-accent">
              <ChevronLeft className="w-5 h-5 -translate-x-[1px]" />
            </button>
            <div>September</div>
            <button className="p-1 rounded-full hover:bg-accent">
              <ChevronRight className="w-5 h-5 translate-x-[1px]" />
            </button>
          </div>
        </div>
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
          <div className="w-full h-full flex flex-col justify-between hover:bg-muted items-start bg-background p-2">
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
          </div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
          <div className="w-full h-full bg-background p-2"></div>
        </div>
      </div>
    </div>
  );
}
