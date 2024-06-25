import { create } from "zustand";
import { isMobileDevice } from "../utils/util";
import { DeviceStoreType } from "../types";

const deviceStore = create<DeviceStoreType>((set) => ({
  isMobile: isMobileDevice(navigator.userAgent),
  actions: {
    handleIsMobile: (v) => set(() => ({ isMobile: v })),
  },
}));

const useIsMobile = () => deviceStore((state) => state.isMobile);
const useDeviceActions = (name: keyof DeviceStoreType["actions"]) =>
  deviceStore((state) => state.actions[name]);

export { useIsMobile, useDeviceActions };
