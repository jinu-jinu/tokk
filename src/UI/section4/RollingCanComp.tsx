import RollingCan from "../../components/RollingCan/RollingCan";
import useAssetInit from "../../components/Can/useAssetInit";
import { MotionValue } from "framer-motion";

const RollingCanComp = ({ scrollY }: { scrollY: MotionValue<number> }) => {
  const { nodes, textures } = useAssetInit();

  return <RollingCan nodes={nodes} textures={textures} scrollY={scrollY} />;
};

export default RollingCanComp;
