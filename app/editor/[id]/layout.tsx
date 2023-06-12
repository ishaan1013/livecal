import EditorWrapper from "@/components/editor";
// import Item from "@/components/editor/item";
// import { Button } from "@/components/ui/button";
// import { ChevronLeft } from "lucide-react";
// import Link from "next/link";

export default function EditorLayout({
  params,
  children,
}: {
  params: { id: string };
  children: React.ReactNode;
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

  return (
    <div className="w-screen min-h-screen p-8 bg-muted flex-grow flex items-center flex-col">
      <EditorWrapper dateString={dateString}>{children}</EditorWrapper>
    </div>
  );
}
