import { View } from "@react-three/drei";
import Flowfield from "../../components/FlowField/FlowField";

const BackgroundBubble = () => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Flowfield />
    </View>
  );
};

export default BackgroundBubble;
