import EditorWrapper from "@/components/editor";
import { setupDate, setupView } from "@/lib/data";
import { auth } from "@clerk/nextjs";
// import Item from "@/components/editor/item";
// import { Button } from "@/components/ui/button";
// import { ChevronLeft } from "lucide-react";
// import Link from "next/link";

export default async function EditorLayout({
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

  const user = auth();

  if (user === undefined) return <div>NOT SIGNED IN</div>;

  const view = await setupView({
    month: dateParts[1],
    year: dateParts[0],
    user,
  });

  const viewId = id + " " + (user.orgId ?? user.userId);

  const dateData = await setupDate({
    day: dateParts[2],
    month: dateParts[1],
    year: dateParts[0],
    view,
  });

  return (
    <div className="w-screen min-h-screen p-8 bg-muted flex-grow flex items-center flex-col">
      <EditorWrapper
        roomId={viewId}
        empty={false}
        data={dateData}
        dateString={dateString}
      >
        {children}
      </EditorWrapper>
    </div>
  );
}
