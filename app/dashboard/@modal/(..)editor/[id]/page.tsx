import Modal from "@/components/editor/modal";

export default function EditorModal({ params }: { params: { id: string } }) {
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

  return <Modal dateString={dateString} />;
}
