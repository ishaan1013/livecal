import Calendar from "@/components/calendar/calendar";
import DateSelect from "@/components/calendar/dateSelect";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Dashboard() {
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
        <Calendar />
      </div>
    </div>
  );
}
