import { MotionValue } from "framer-motion";
import { Texture } from "three";

export type AssetTextureType = {
  color1: Texture;
  color2: Texture;
  color3: Texture;
  bump: Texture;
  s5One: Texture;
  s5Two: Texture;
  s5Three: Texture;
  s5Four: Texture;
  s5Five: Texture;
};

export type assetsStoreType = {
  nodes: any;
  textures: AssetTextureType | null;
  actions: {
    handleAssetsInit: (v: { nodes: any; textures: AssetTextureType }) => void;
  };
};

export type CanChangeStoreType = {
  currentCan: number;
  nextCan: number;
  actions: {
    handleCurrentCan: (v: number) => void;
    handleNextCan: (v: number) => void;
  };
};

export type LoadingStoreType = {
  isAssetDownloaded: boolean;
  actions: {
    handleAssetDownload: (v: boolean) => void;
  };
};

export type SwiperType = {
  text: string;
  bgColor: string;
  scrollOffset: number[];
  clipOffset: string[];
  scrollY: MotionValue<number>;
};
