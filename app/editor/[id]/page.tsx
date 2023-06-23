import AddButton from "@/components/editor/addButton";
import Item from "@/components/editor/item";
import { setupDate, setupView } from "@/lib/data";
import { auth } from "@clerk/nextjs";

export default async function Editor({ params }: { params: { id: string } }) {
  const { id } = params;
  const dateParts = id.split("-");

  // validate route

  const user = auth();

  if (user === undefined) return <div>NOT SIGNED IN</div>;

  const view = await setupView({
    month: dateParts[1],
    year: dateParts[0],
    user,
  });
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

      <AddButton path={id} dateId={dateData.id} />
    </>
  );
}
