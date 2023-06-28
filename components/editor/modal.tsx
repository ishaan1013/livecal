"use client";

import { Date, Task } from "@prisma/client";
import { useRouter } from "next/navigation";

import EditorWrapper from ".";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import AddButton from "./addButton";
import Items from "./items";

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
  roomId: string;
  org: boolean;
};

export default function Modal(props: DataProps | Empty) {
  const router = useRouter();

  const onOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
      router.refresh();
    }
  };

  const { dateString, path, empty } = props;

  if (empty)
    return (
      <Dialog open onOpenChange={onOpenChange}>
        <DialogContent className="bg-muted">
          <div className="w-full flex items-center flex-col">
            <EditorWrapper empty={true} modal dateString={dateString}>
              <div>NOT SIGNED IN</div>
            </EditorWrapper>
          </div>
        </DialogContent>
      </Dialog>
    );

  const data = props.dateData;
  const roomId = props.roomId;
  const org = props.org;

  return (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent className="bg-muted">
        <div className="w-full flex items-center flex-col">
          <EditorWrapper
            empty={false}
            data={data}
            roomId={roomId}
            org={org}
            modal
            dateString={dateString}
          >
            <Items path={path} />
            {/* {data.tasks.map((task) => (
              <Item
                key={task.id}
                path={path}
                itemId={task.id}
                text={task.text}
                label={task.label}
                check={task.checked}
              />
            ))} */}

            <AddButton path={path} />
            {/* <pre className="text-xs whitespace-pre">
              {JSON.stringify(dateData, null, 2)}
            </pre> */}
          </EditorWrapper>
        </div>
      </DialogContent>
    </Dialog>
  );
}
