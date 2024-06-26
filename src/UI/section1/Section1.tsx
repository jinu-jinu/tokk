import { View } from "@react-three/drei";

import Experience from "./Experience";
import Titles from "./Titles";
import Wave from "../../components/Wave";

const Section1 = () => {
  return (
    <section className="relative w-full h-[100dvh]">
      <View className="w-full h-full">
        <Experience />
      </View>
      <Titles />
      <Wave />
    </section>
  );
};

export default Section1;
