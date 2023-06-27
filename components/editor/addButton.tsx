"use client";

import { Button } from "@/components/ui/button";
import { createTask } from "@/lib/actions";
import useStore from "@/lib/state";
import { Plus } from "lucide-react";
import { useTransition } from "react";

import { v4 as uuidv4 } from "uuid";

export default function AddButton({ path }: { path: string }) {
  const [isPending, startTransition] = useTransition();

  const dateId = useStore((state) => state.dateId);
  const addTask = useStore((state) => state.addTask);

  return (
    <Button
      onClick={() => {
        const id = uuidv4();

        addTask({
          id,
          text: "New Task",
          checked: false,
          dateId,
          label: "RED",
        });
        startTransition(() => createTask(id, path, dateId));
      }}
      variant={"secondary"}
      className="w-full"
      disabled={isPending}
    >
      <Plus className="h-4 w-4 mr-2" />
      Add Task
    </Button>
  );
}
