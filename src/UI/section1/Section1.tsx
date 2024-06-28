import Titles from "./Titles";
import Wave from "../../components/Wave";
import BackgroundBubble from "../../components/BackgroundBubble";
import TapCan from "../../components/TapCan/TapCan";

const Section1 = () => {
  return (
    <section className="relative w-full h-[100dvh]">
      <Titles />
      <BackgroundBubble customClass="w-full h-full">
        <TapCan />
      </BackgroundBubble>
      <Wave />
    </section>
  );
};

export default Section1;
