"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

import Item from "./item";
// import { ChevronLeft } from "lucide-react";

// import * as DialogPrimitive from "@radix-ui/react-dialog";
import EditorWrapper from ".";
import { Date, Task } from "@prisma/client";

export default function Modal({
  dateString,
  dateData,
}: {
  dateString: string;
  dateData: Date & {
    tasks: Task[];
  };
}) {
  const router = useRouter();

  const onOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  return (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent className="bg-muted">
        <div className="w-full flex items-center flex-col">
          <EditorWrapper modal dateString={dateString}>
            {dateData.tasks.map((task) => (
              <Item text={task.text} />
            ))}
            {dateData.tasks.length === 0 ? <div>no tasks</div> : null}
          </EditorWrapper>
        </div>
      </DialogContent>
    </Dialog>
  );
}
