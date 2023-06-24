"use client";

import { Date, Task } from "@prisma/client";
import Item from "./item";
import { useState } from "react";

export default function Items({
  path,
  data,
}: {
  path: string;
  data: Date & {
    tasks: Task[];
  };
}) {
  const [editLock, setEditLock] = useState(false);

  return (
    <>
      {data.tasks.map((task) => (
        <Item
          key={task.id}
          path={path}
          itemId={task.id}
          text={task.text}
          label={task.label}
          check={task.checked}
          editLock={editLock}
          setEditLock={setEditLock}
        />
      ))}
    </>
  );
}
