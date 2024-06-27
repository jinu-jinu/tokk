import useAssetInit from "../../components/Can/useAssetInit";
import DefaultCan from "../../components/DefaultCan/DefaultCan";
import { MotionValue } from "framer-motion";

const MovingCan = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const { nodes, textures } = useAssetInit();
  return <DefaultCan nodes={nodes} textures={textures} scrollYProgress={scrollYProgress} />;
};

export default MovingCan;
