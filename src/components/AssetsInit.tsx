import { useGLTF, useTexture } from "@react-three/drei";
import { useAssetsActions } from "../store/asstesStore";

const AssetsInit = () => {
  const { nodes } = useGLTF("/models/can.glb");
  const textures = useTexture({
    color1: "/images/strawberry.avif",
    color2: "/images/lemon.avif",
    color3: "/images/grape.avif",
    bump: "/images/brushed.avif",
    s5One: "/images/section5-1.avif",
    s5Two: "/images/section5-2.avif",
    s5Three: "/images/section5-3.avif",
    s5Four: "/images/section5-4.avif",
    s5Five: "/images/section5-5.avif",
  });
  textures.color1.flipY = false;
  textures.color2.flipY = false;
  textures.color3.flipY = false;
  textures.bump.flipY = false;

  const handleAssetsInit = useAssetsActions("handleAssetsInit");
  handleAssetsInit({ nodes, textures });

  return <></>;
};

useGLTF.preload("/models/can.glb");
useTexture.preload([
  "/images/strawberry.avif",
  "/images/lemon.avif",
  "/images/grape.avif",
  "/images/brushed.avif",
]);
export default AssetsInit;
