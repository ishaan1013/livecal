"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import useStore, { User } from "@/lib/state";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import Avatar from "./avatar";
import { Date, Task } from "@prisma/client";
import { getUserLabel } from "@/lib/utils";
import { Badge } from "../ui/badge";

type Empty = {
  modal?: boolean;
  dateString: string;
  children: React.ReactNode;
  empty: true;
};

type Props = {
  modal?: boolean;
  dateString: string;
  children: React.ReactNode;
  data: Date & {
    tasks: Task[];
  };
  roomId: string;
  empty: false;
  org: boolean;
};

export default function EditorWrapper(props: Empty | Props) {
  const { modal, dateString, empty, children } = props;

  const {
    liveblocks: { enterRoom, leaveRoom, others, status },
  } = useStore();

  const setUserData = useStore((state) => state.setUserData);
  const setTasks = useStore((state) => state.setTasks);
  const setDateId = useStore((state) => state.setDateId);

  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (empty || !isLoaded || !isSignedIn) return;

    if (!props.org) {
      setTasks(props.data.tasks);
      setDateId(props.data.id);

      return;
    }

    setUserData({
      id: user.id,
      name: user.fullName,
      image: user.profileImageUrl,
      label: getUserLabel(user.fullName ?? ""),
    });

    enterRoom(props.roomId);

    setTasks(props.data.tasks);
    setDateId(props.data.id);

    return () => {
      leaveRoom(props.roomId);
    };
  }, [enterRoom, leaveRoom, user]);

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
          <div className="text-xl font-bold">{dateString}</div>
        </div>
        {!empty &&
          others.map(({ connectionId, presence }) => {
            const userData = presence?.userData as User;
            if (!userData.name || !userData.image) return null;
            return (
              <Avatar
                name={userData.name}
                key={userData.id}
                src={userData.image}
                color={userData.label}
              />
            );
          })}
        {/* <div className="text-xs text-green-900">{JSON.stringify(others)}</div> */}
      </div>

      {!empty && props.org ? (
        <div className="flex mt-2 w-full space-x-1 items-center">
          {status ? (
            <Badge variant="outline">
              Status: {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
          ) : null}
          <Badge className="flex items-center" variant="outline">
            <div className="w-2 h-2 relative mr-1.5">
              <div className="w-2 h-2 bg-green-500/75 animate-ping rounded-full absolute top-0 left-0"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full absolute top-0 left-0"></div>
            </div>
            {others ? others.length + 1 : 1} Active
          </Badge>
        </div>
      ) : null}

      <div className="w-full space-y-2 max-w-screen-sm mt-6">{children}</div>
    </>
  );
}
