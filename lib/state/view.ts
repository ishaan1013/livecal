import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ViewState {
  month: number;
  year: number;
  setMonth: (month: number) => void;
  setYear: (year: number) => void;
}

export const useViewStore = create<ViewState>()(
  devtools((set) => ({
    month: 5,
    year: 2023,
    setMonth: (month) => set(() => ({ month })),
    setYear: (year) => set(() => ({ year })),
  }))
);
