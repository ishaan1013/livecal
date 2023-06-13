import Item from "@/components/editor/item";
import { Button } from "@/components/ui/button";
import { setupDate, setupView } from "@/lib/data";
import { Plus } from "lucide-react";

export default async function Editor({ params }: { params: { id: string } }) {
  const { id } = params;
  const dateParts = id.split("-");

  // validate route

  const view = await setupView({ month: dateParts[1], year: dateParts[0] });
  const dateData = await setupDate({
    day: dateParts[2],
    month: dateParts[1],
    year: dateParts[0],
    view,
  });

  return (
    <>
      {dateData.tasks.map((task) => (
        <Item
          key={task.id}
          path={id}
          itemId={task.id}
          text={task.text}
          label={task.label}
          check={task.checked}
        />
      ))}
      <Button variant={"secondary"} className="w-full">
        <Plus className="h-4 w-4 mr-2" />
        Add Task
      </Button>
    </>
  );
}
