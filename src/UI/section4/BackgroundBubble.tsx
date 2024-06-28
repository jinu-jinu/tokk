import { View } from "@react-three/drei";
import Flowfield from "../../components/FlowField/FlowField";

const BackgroundBubble = () => {
  return (
    <View className="w-full h-full">
      <Flowfield />
    </View>
  );
};

export default BackgroundBubble;
