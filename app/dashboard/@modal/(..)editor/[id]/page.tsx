import Modal from "@/components/editor/modal";
import { setupView } from "@/lib/data";
import { setupDate } from "@/lib/data";
import { auth } from "@clerk/nextjs";

export default async function EditorModal({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const dateParts = id.split("-");
  const date = new Date(
    parseInt(dateParts[0]),
    parseInt(dateParts[1]) - 1,
    parseInt(dateParts[2])
  );

  const dateString = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // validate route

  const user = auth();

  if (user === undefined) {
    console.log("user is undefined");
    return <Modal empty dateString={dateString} path={id} />;
  }

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
    <Modal
      empty={false}
      dateData={dateData}
      dateString={dateString}
      path={id}
    />
  );
}
