"use client";

import Item from "./item";
import { useEffect, useState } from "react";
import useStore, { User } from "@/lib/state";

export default function Items({ path }: { path: string }) {
  const [editLock, setEditLock] = useState(false);

  const tasks = useStore((state) => state.tasks);
  const others = useStore((state) => state.liveblocks.others);

  const [selections, setSelections] = useState<{
    [key: string]: string[];
  }>({});

  useEffect(() => {
    setSelections({});

    others.forEach(({ connectionId, presence }) => {
      const userData = presence?.userData as User;
      const selected = presence?.selected as string;
      console.log(userData.name + " selected " + selected);

      if (selected) {
        setSelections((selections) => ({
          ...selections,
          [selected]: [userData.name ?? "Unnamed User", userData.label],
        }));
      }

      // console.log("selections", selections);
    });
  }, [others]);

  return (
    <>
      {tasks.map((task) => {
        const selected = selections.hasOwnProperty(task.id)
          ? selections[task.id]
          : null;

        return (
          <Item
            key={task.id}
            id={task.id}
            path={path}
            itemId={task.id}
            text={task.text}
            label={task.label}
            check={task.checked}
            editLock={editLock}
            setEditLock={setEditLock}
            selected={selected}
          />
        );
      })}
      {/* <div className="text-xs whitespace-pre">
        {JSON.stringify(tasks, null, 4)}
      </div> */}
    </>
  );
}
