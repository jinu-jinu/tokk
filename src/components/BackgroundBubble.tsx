import { View } from "@react-three/drei";
import Flowfield from "./FlowField/FlowField";
import { ReactNode } from "react";

const BackgroundBubble = ({
  customClass,
  children,
}: {
  customClass: string;
  children?: ReactNode;
}) => {
  return (
    <View className={customClass}>
      <Flowfield />
      {children}
    </View>
  );
};

export default BackgroundBubble;
