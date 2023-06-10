import Calendar from "@/components/calendar/calendar";
import DateSelect from "@/components/calendar/dateSelect";
import { redirect } from "next/navigation";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Dashboard({
  params,
}: {
  params: { month: string; year: string };
}) {
  const { month, year } = params;
  const d = new Date();
  const currentYear = d.getFullYear();
  const currentMonth = (d.getMonth() + 1).toString().padStart(2, "0");

  // if the year is not a number or under 1000 or over 9999, redirect to current
  if (isNaN(parseInt(year)) || parseInt(year) < 1000 || parseInt(year) > 9999) {
    redirect(`/dashboard/${currentYear}/${currentMonth}`);
  }

  // if the month is not a number or under 1 or over 12, redirect to current
  if (isNaN(parseInt(month)) || parseInt(month) < 1 || parseInt(month) > 12) {
    redirect(`/dashboard/${currentYear}/${currentMonth}`);
  }

  return (
    <div className="w-screen p-8 bg-muted flex-grow flex flex-col">
      <div className="flex w-full justify-between items-center">
        <DateSelect month={parseInt(month)} year={parseInt(year)} />
        <div className="bg-background w-9 rounded-full h-9" />
      </div>
      {/* <div>{JSON.stringify(params)} pathname</div> */}
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
        <Calendar month={parseInt(month)} year={parseInt(year)} />
      </div>
    </div>
  );
}
