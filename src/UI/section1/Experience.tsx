import { View } from "@react-three/drei";
import Flowfield from "../../components/FlowField/FlowField";
import CustomCamera from "./CustomCamera";
import TapCan from "./TapCan";

const Experience = () => {
  return (
    <View className="w-full h-full">
      <TapCan />
      <Flowfield />
      <CustomCamera />
    </View>
  );
};

export default Experience;
