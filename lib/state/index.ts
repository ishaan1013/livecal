import { create } from "zustand";
import { createClient } from "@liveblocks/client";
import { liveblocks } from "@liveblocks/zustand";
import type { WithLiveblocks } from "@liveblocks/zustand";
import { Label } from "@prisma/client";

export type User = {
  name: string | null | undefined;
  image: string | null | undefined;
  id: string;
};

type Task = {
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
};

const client = createClient({
  publicApiKey:
    "pk_dev_HcFppTumviawSWdK9hmZ23V4gb8X3vhUN2TRaIvTcD6uhHMBeJakGa4Ay5iTkhJm",
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

      setUserData: (userData) => set({ userData }),
      setTasks: (tasks) => set({ tasks }),
    }),
    {
      client,
      presenceMapping: {
        userData: true,
      },
      storageMapping: {
        tasks: true,
      },
    }
  )
);

export default useStore;
