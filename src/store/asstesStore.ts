import { create } from "zustand";
import { assetsStoreType } from "../types";

const assetsStore = create<assetsStoreType>((set) => ({
  nodes: null,
  textures: null,
  actions: {
    handleAssetsInit: (v) =>
      set(() => ({
        nodes: v.nodes,
        textures: v.textures,
      })),
  },
}));

const useNodes = () => assetsStore((state) => state.nodes);
const useTextures = () => assetsStore((state) => state.textures);
const useAssetsActions = (name: keyof assetsStoreType["actions"]) =>
  assetsStore((state) => state.actions[name]);

export { useNodes, useTextures, useAssetsActions };
