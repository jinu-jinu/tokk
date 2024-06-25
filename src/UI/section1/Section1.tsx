import { View } from "@react-three/drei";

import Experience from "./Experience";
import Titles from "./Titles";
import CircularText from "../../components/CircularText";
import Stickers from "./Stickers";

const Section1 = () => {
  return (
    <section className="relative w-full h-[100dvh]">
      <View className="w-full h-full">
        <Experience />
      </View>
      <Titles />
      <Stickers />

      <CircularText />
    </section>
  );
};

export default Section1;
