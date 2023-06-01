import Item from "@/components/editor/item";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

  return (
    <Dialog>
      <DialogContent>
        <div className="text-xl font-semibold">{dateString}</div>
        <div className="w-full space-y-2 mt-4">
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </div>
      </DialogContent>
    </Dialog>
  );
}
