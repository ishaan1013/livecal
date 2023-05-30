import Item from "@/components/editor/item";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function EditorLayout({
  params,
  children,
}: {
  params: { id: string };
  children: React.ReactNode;
}) {
  const { id } = params;
  const dateParts = id.split("-");
  const date = new Date(
    parseInt(dateParts[0]),
    parseInt(dateParts[1]) - 1,
    parseInt(dateParts[2])
  );

  const dateString = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-screen p-8 bg-muted flex-grow flex items-center flex-col">
      <div className="flex w-full justify-between items-center">
        <div className="space-x-4 flex items-center">
          <Button size="sm" variant="ghost">
            <Link className="flex items-center" href="/dashboard">
              <ChevronLeft className="w-4 h-4 mr-1 -ml-1" />
              Back
            </Link>
          </Button>
          <div className="text-xl font-semibold">{dateString}</div>
        </div>
        <div className="space-x-3 flex items-center">
          <div className="bg-background w-9 rounded-full h-9" />
        </div>
      </div>

      <div className="h-36 w-full space-y-2 max-w-screen-sm mt-6">
        {children}
      </div>
    </div>
  );
}
