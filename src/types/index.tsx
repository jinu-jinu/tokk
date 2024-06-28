import { MotionValue } from "framer-motion";
import { Texture } from "three";

export type AssetTextureType = {
  color1: Texture;
  color2: Texture;
  color3: Texture;
  bump: Texture;
};

export type CanChangeStoreType = {
  currentCan: number;
  nextCan: number;
  actions: {
    handleCurrentCan: (v: number) => void;
    handleNextCan: (v: number) => void;
  };
};

export type DeviceStoreType = {
  isMobile: boolean;
  actions: {
    handleIsMobile: (v: boolean) => void;
  };
};

export type LoadingStoreType = {
  isAssetDownloaded: boolean;
  actions: {
    handleAssetDownload: (v: boolean) => void;
  };
};

export type TransitionStoreType = {
  isTransitionOut: boolean;
  actions: {
    handleTransitionOut: (v: boolean) => void;
  };
};

export type SwiperType = {
  text: string;
  bgColor: string;
  scrollOffset: number[];
  clipOffset: string[];
  scrollY: MotionValue<number>;
};
