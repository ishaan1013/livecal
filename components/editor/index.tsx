"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import useStore from "@/lib/state";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

export default function EditorWrapper({
  modal,
  dateString,
  children,
}: {
  modal?: boolean;
  dateString: string;
  children: React.ReactNode;
}) {
  const {
    liveblocks: { enterRoom, leaveRoom },
  } = useStore();

  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (!isLoaded || !isSignedIn) return;
    // add user data to live store

    enterRoom("room-id");
    return () => {
      leaveRoom("room-id");
    };
  }, [enterRoom, leaveRoom, user]);

  const others = useStore((state) => state.liveblocks.others);

  return (
    <>
      <div className="flex w-full justify-between items-center">
        <div className="space-x-3 flex items-center">
          {modal ? (
            <DialogPrimitive.Close className="hover:bg-accent text-accent-foreground h-9 px-3 rounded-md inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background">
              <ChevronLeft className="w-4 h-4 mr-1 -ml-1" />
              Back
            </DialogPrimitive.Close>
          ) : (
            <Button size="sm" variant="ghost">
              <Link className="flex items-center" href="/dashboard">
                {/* todo link to the correct year/month */}
                <ChevronLeft className="w-4 h-4 mr-1 -ml-1" />
                Back
              </Link>
            </Button>
          )}
          <div className="text-xl font-semibold">{dateString}</div>
        </div>
        <div className="text-xs text-green-900">{JSON.stringify(others)}</div>
        {/* <div className="space-x-2 flex items-center">
          <div className="bg-background w-9 rounded-full h-9" />
        </div> */}
      </div>

      <div className="w-full space-y-2 max-w-screen-sm mt-6">{children}</div>
    </>
  );
}
