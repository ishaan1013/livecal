import { create } from "zustand";
import { createClient } from "@liveblocks/client";
import { liveblocks } from "@liveblocks/zustand";
import type { WithLiveblocks } from "@liveblocks/zustand";
import { Label } from "@prisma/client";
import { devtools, persist } from "zustand/middleware";

export type User = {
  name: string | null | undefined;
  image: string | null | undefined;
  id: string;
};

export type Task = {
  id: string;
  text: string;
  checked: boolean;
  label: Label;
  dateId: string;
};

type State = {
  userData: User;
  setUserData: (userData: User) => void;
  tasks: Task[];
  setTasks: (task: Task[]) => void;
  dateId: string;
  setDateId: (dateId: string) => void;
};

const client = createClient({
  publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY as string,
});

const useStore = create<WithLiveblocks<State>>()(
  liveblocks(
    (set) => ({
      userData: {
        name: null,
        image: null,
        id: "",
      },
      tasks: [],
      dateId: "",

      setUserData: (userData) => set({ userData }),
      setTasks: (tasks) => set({ tasks }),
      setDateId: (dateId) => set({ dateId }),
    }),
    {
      client,
      presenceMapping: {
        userData: true,
      },
      storageMapping: {
        tasks: true,
        dateId: true,
      },
    }
  )
);

export default useStore;
