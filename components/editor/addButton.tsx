"use client";

import { Button } from "@/components/ui/button";
import { createTask } from "@/lib/actions";
import useStore from "@/lib/state";
import { Plus } from "lucide-react";
import { useTransition } from "react";

export default function AddButton({ path }: { path: string }) {
  const [isPending, startTransition] = useTransition();
  const dateId = useStore((state) => state.dateId);

  return (
    <Button
      onClick={() => {
        startTransition(() => createTask(path, dateId));
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
