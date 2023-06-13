"use client";

import { Button } from "@/components/ui/button";
import { createTask } from "@/lib/actions";
import { Plus } from "lucide-react";
import { useTransition } from "react";

export default function AddButton({
  path,
  dateId,
}: {
  path: string;
  dateId: string;
}) {
  const [isPending, startTransition] = useTransition();

  // loading state

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
