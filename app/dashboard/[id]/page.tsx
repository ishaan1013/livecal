import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function Editor({ params }: { params: { id: string } }) {
  return (
    <div className="w-screen p-8 bg-muted flex-grow flex flex-col">
      <div className="flex w-full justify-between items-center">
        <div className="space-x-3 flex items-center">
          <Button size="sm">
            <ChevronLeft className="w-4 h-4 mr-2 -ml-1" />
            Back
          </Button>
          <div className="text-xl font-semibold">{params.id}</div>
        </div>
        <div className="space-x-3 flex items-center">
          <div className="bg-background w-9 rounded-full h-9" />
        </div>
      </div>
    </div>
  );
}
