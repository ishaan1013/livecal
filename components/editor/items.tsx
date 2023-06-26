"use client";

import Item from "./item";
import { useEffect, useState } from "react";
import useStore from "@/lib/state";

export default function Items({ path }: { path: string }) {
  const [editLock, setEditLock] = useState(false);

  const tasks = useStore((state) => state.tasks);

  return (
    <>
      {tasks.map((task) => (
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
