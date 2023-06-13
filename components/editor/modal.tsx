"use client";

import { Date, Task } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

import Item from "./item";
import EditorWrapper from ".";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import AddButton from "./addButton";

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
                key={task.id}
                path={path}
                itemId={task.id}
                text={task.text}
                label={task.label}
                check={task.checked}
              />
            ))}

            <AddButton path={path} dateId={dateData.id} />
            {/* <pre className="text-xs whitespace-pre">
              {JSON.stringify(dateData, null, 2)}
            </pre> */}
          </EditorWrapper>
        </div>
      </DialogContent>
    </Dialog>
  );
}
