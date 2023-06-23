"use client";

import { Date, Task } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

import Item from "./item";
import EditorWrapper from ".";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import AddButton from "./addButton";

type Empty = {
  empty: true;
  dateString: string;
  path: string;
};

type DataProps = {
  empty: false;
  dateString: string;
  dateData: Date & {
    tasks: Task[];
  };
  path: string;
};

export default function Modal(props: DataProps | Empty) {
  const router = useRouter();

  const onOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  const { dateString, path, empty } = props;

  if (empty)
    return (
      <Dialog open onOpenChange={onOpenChange}>
        <DialogContent className="bg-muted">
          <div className="w-full flex items-center flex-col">
            <EditorWrapper modal dateString={dateString}>
              <div>NOT SIGNED IN</div>
            </EditorWrapper>
          </div>
        </DialogContent>
      </Dialog>
    );

  const data = props.dateData;

  return (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent className="bg-muted">
        <div className="w-full flex items-center flex-col">
          <EditorWrapper modal dateString={dateString}>
            {data.tasks.map((task) => (
              <Item
                key={task.id}
                path={path}
                itemId={task.id}
                text={task.text}
                label={task.label}
                check={task.checked}
              />
            ))}

            <AddButton path={path} dateId={data.id} />
            {/* <pre className="text-xs whitespace-pre">
              {JSON.stringify(dateData, null, 2)}
            </pre> */}
          </EditorWrapper>
        </div>
      </DialogContent>
    </Dialog>
  );
}
