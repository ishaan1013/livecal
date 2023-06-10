"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

import Item from "./item";
import { ChevronLeft } from "lucide-react";

import * as DialogPrimitive from "@radix-ui/react-dialog";

export default function Modal({ dateString }: { dateString: string }) {
  const router = useRouter();

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
              <DialogPrimitive.Close className="hover:bg-accent text-accent-foreground h-9 px-3 rounded-md inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background">
                <ChevronLeft className="w-4 h-4 mr-1 -ml-1" />
                Back
              </DialogPrimitive.Close>
              <div className="text-xl font-semibold">{dateString}</div>
            </div>
            <div className="space-x-2 flex items-center">
              <div className="bg-background w-9 rounded-full h-9" />
              <div className="bg-background w-9 rounded-full h-9" />
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
