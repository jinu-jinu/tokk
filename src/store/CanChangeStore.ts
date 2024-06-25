import { create } from "zustand";
import { CanChangeStoreType } from "../types";

const canChangeStore = create<CanChangeStoreType>((set) => ({
  currentCan: 0,
  nextCan: 0,
  actions: {
    handleCurrentCan: (v) =>
      set(() => ({
        currentCan: v,
      })),
    handleNextCan: (v) =>
      set(() => ({
        nextCan: v,
      })),
  },
}));

const useCurrentCan = () => canChangeStore((state) => state.currentCan);
const useNextCan = () => canChangeStore((state) => state.nextCan);
const useCanChangeActions = (name: keyof CanChangeStoreType["actions"]) =>
  canChangeStore((state) => state.actions[name]);

export { useCurrentCan, useNextCan, useCanChangeActions };
