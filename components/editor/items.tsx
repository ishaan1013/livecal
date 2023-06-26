"use client";

import { Date, Task } from "@prisma/client";
import Item from "./item";
import { useEffect, useState } from "react";
import useStore from "@/lib/state";

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

  const tasks = useStore((state) => state.tasks);
  const setTasks = useStore((state) => state.setTasks);

  useEffect(() => {
    console.log("setting tasks:", data.tasks);
    setTasks(data.tasks);

    return () => {
      setTasks([]);
    };
  }, []);

  useEffect(() => {
    console.log("tasks:", tasks);
    // setTasks(tasks);
  }, [tasks]);

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
