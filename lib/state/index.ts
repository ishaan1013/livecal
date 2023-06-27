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
  selected: string;
  setSelected: (selected: string) => void;
  tasks: Task[];
  setTasks: (task: Task[]) => void;
  addTask: (task: Task) => void;
  checkTask: (id: string, newState: boolean) => void;
  renameTask: (id: string, text: string) => void;
  changeLabel: (id: string, label: Label) => void;
  deleteTask: (id: string) => void;
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
      selected: "",

      tasks: [],
      dateId: "",

      setUserData: (userData) => set({ userData }),
      setSelected: (selected) => set({ selected }),
      setTasks: (tasks) => set({ tasks }),
      addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
      // check task by id
      checkTask: (id, newState) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, checked: newState } : task
          ),
        })),
      // rename task by id
      renameTask: (id, text) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, text } : task
          ),
        })),
      // change label by id
      changeLabel: (id, label) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, label } : task
          ),
        })),
      // delete task by id
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      setDateId: (dateId) => set({ dateId }),
    }),
    {
      client,
      presenceMapping: {
        userData: true,
        selected: true,
      },
      storageMapping: {
        tasks: true,
        dateId: true,
      },
    }
  )
);

export default useStore;
