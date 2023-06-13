"use client";

import { Date, Task } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { createTask } from "@/lib/actions";

import Item from "./item";
import EditorWrapper from ".";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

export default function Modal({
  dateString,
  dateData,
  path,
}: {
  dateString: string;
  dateData: Date & {
    tasks: Task[];
  };
  path: string;
}) {
  let [isPending, startTransition] = useTransition();

  const router = useRouter();

  const onOpenChange = (open: boolean) => {
    if (!open) {
      const revalidateDash =
        "/dashboard/" + path.split("-").slice(0, 2).join("/");
      console.log("routing back");
      router.back();
      // console.log("reval path", revalidateDash);
      // revalidatePath(revalidateDash);
    }
  };

  return (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent className="bg-muted">
        <div className="w-full flex items-center flex-col">
          <EditorWrapper modal dateString={dateString}>
            {dateData.tasks.map((task) => (
              <Item
                path={path}
                itemId={task.id}
                text={task.text}
                label={task.label}
              />
            ))}
            <Button
              onClick={() => {
                startTransition(() => createTask(path, dateData.id));
              }}
              variant={"secondary"}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Task {dateString}
            </Button>
            {/* <pre className="text-xs whitespace-pre">
              {JSON.stringify(dateData, null, 2)}
            </pre> */}
            {isPending ? <div className="text-xs">pending</div> : null}
          </EditorWrapper>
        </div>
      </DialogContent>
    </Dialog>
  );
}
