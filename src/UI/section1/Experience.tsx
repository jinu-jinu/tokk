import Can from "../../components/Can/Can";
import useAssetInit from "../../components/Can/useAssetInit";
import Flowfield from "../../components/FlowField/FlowField";
import CustomCamera from "./CustomCamera";

const Experience = () => {
  const { nodes, textures } = useAssetInit();

  return (
    <>
      <Flowfield />
      <Can nodes={nodes} textures={textures} />
      <CustomCamera />
    </>
  );
};

export default Experience;
