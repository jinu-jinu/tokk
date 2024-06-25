import { useGLTF, useTexture } from "@react-three/drei";

const useAssetInit = () => {
  const { nodes } = useGLTF("/models/can.glb");
  const textures = useTexture({
    color1: "/images/strawberry.avif",
    color2: "/images/lemon.avif",
    color3: "/images/grape.avif",
    bump: "/images/brushed.avif",
    tap: "/images/tap.jpg",
  });
  textures.color1.flipY = false;
  textures.color2.flipY = false;
  textures.color3.flipY = false;
  textures.bump.flipY = false;

  return { nodes, textures };
};

useGLTF.preload("/models/can.glb");
export default useAssetInit;
