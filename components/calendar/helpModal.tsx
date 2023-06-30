"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import EditorWrapper from "../editor";
import { ChevronLeft, Github, Twitter } from "lucide-react";
import { Button } from "../ui/button";

export default function HelpModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-muted sm:max-w-[550px]">
        <div className="w-full flex items-start flex-col">
          <div className="space-x-3 flex items-center">
            <DialogPrimitive.Close className="hover:bg-accent text-accent-foreground h-9 px-3 rounded-md inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background">
              <ChevronLeft className="w-4 h-4 mr-1 -ml-1" />
              Back
            </DialogPrimitive.Close>
            <div className="text-xl font-bold">Project Info</div>
          </div>

          <div className="w-full space-y-3 text-muted-foreground mt-4">
            <div className="text-sm">
              A real-time calendar app to plan in sync with other users
            </div>
            <div className="text-sm">
              To enable collaboration, create or join an organization (in the
              navbar). Then collaborate with others on individual dates.
            </div>
            <div className="text-sm">
              Built with: Next.js 13 + intercepted routes & server actions,
              Liveblocks, Clerk, Tailwind, Zustand, Planetscale, Prisma
            </div>
          </div>
          <div className="space-x-2 mt-6">
            <a
              href="https://www.github.com/ishaan1013/livecal"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline">
                <Github className="h-5 w-5 mr-1.5" />
                Github
              </Button>
            </a>
            <a
              href="https://www.twitter.com/ishaandey_"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline">
                <Twitter className="h-5 w-5 mr-1.5" />
                Twitter
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
