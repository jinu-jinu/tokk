import { MotionValue } from "framer-motion";
import { Texture } from "three";

export type AssetTextureType = {
  color1: Texture;
  color2: Texture;
  color3: Texture;
  bump: Texture;
  tap: Texture;
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

export type scrollStoreType = {
  currentScroll: MotionValue<number> | null;
  currentSection: number | null;
  actions: {
    handleCurrentScroll: (v: MotionValue<number>) => void;
    handleCurrentSection: (v: number) => void;
  };
};

export type LoadingStoreType = {
  isAssetDownloaded: boolean;
  actions: {
    handleAssetDownload: (v: boolean) => void;
  };
};

export type ProjectType = {
  project_code: number;
  name: string;
  technologies: string;
  year: number;
};

export type ProjectStoreType = {
  projectIdx: number;
  project: ProjectType;
  actions: {
    handlePrevProject: () => void;
    handleNextProject: () => void;
  };
};

export type TransitionStoreType = {
  isTransitionOut: boolean;
  actions: {
    handleTransitionOut: (v: boolean) => void;
  };
};

export type DirectionStoreType = {
  direction: "L" | "R";
  actions: {
    handleDirection: (v: "L" | "R") => void;
  };
};
