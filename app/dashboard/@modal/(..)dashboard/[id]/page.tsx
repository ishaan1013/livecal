"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import Item from "@/components/editor/item";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft } from "lucide-react";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export default function EditorModal({ params }: { params: { id: string } }) {
  const router = useRouter();

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

  const onOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  return (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent className="bg-muted">
        <div className="w-full flex items-center flex-col">
          <div className="flex w-full justify-between items-center">
            <div className="space-x-3 flex items-center">
              <Button size="sm" variant="ghost">
                <Link className="flex items-center" href="/dashboard">
                  <ChevronLeft className="w-4 h-4 mr-1 -ml-1" />
                  Back
                </Link>
              </Button>
              <div className="text-xl font-semibold">{dateString}</div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="space-x-2 flex items-center">
                <div className="bg-background w-9 rounded-full h-9" />
              </div>
              <DialogPrimitive.Close className="p-2 hover:bg-accent text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
            </div>
          </div>

          <div className="h-36 w-full space-y-2 max-w-screen-sm mt-6">
            <Item />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
