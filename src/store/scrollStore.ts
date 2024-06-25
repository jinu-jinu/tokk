import { create } from "zustand";
import { scrollStoreType } from "../types";

const scrollStore = create<scrollStoreType>((set) => ({
  currentScroll: null,
  currentSection: null,
  actions: {
    handleCurrentScroll: (v) => set(() => ({ currentScroll: v })),
    handleCurrentSection: (v) => set(() => ({ currentSection: v })),
  },
}));

const useCurrentScroll = () => scrollStore((state) => state.currentScroll);
const useCurrentSection = () => scrollStore((state) => state.currentSection);
const useScrollActions = (name: keyof scrollStoreType["actions"]) =>
  scrollStore((state) => state.actions[name]);

export { useCurrentScroll, useCurrentSection, useScrollActions };
