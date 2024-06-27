import Can from "../../components/Can/Can";
import useAssetInit from "../../components/Can/useAssetInit";

const TapCan = () => {
  const { nodes, textures } = useAssetInit();

  return <Can nodes={nodes} textures={textures} />;
};

export default TapCan;
