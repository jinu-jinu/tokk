import { View } from "@react-three/drei";
import Can from "../../components/Can/Can";

const Article = () => {
  return (
    <article
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        mixBlendMode: "screen",
        color: "#999",
        marginTop: "10rem",
        marginLeft: "10rem",
      }}
      className="font-Noto flex flex-col leading-tight"
    >
      <p className="text-[14px] font-bold text-[#666] mb-[6px]">- TOKK을 마셔야 하는 이유</p>
      <h2 className="font-LOTTERIACHAB text-[3.5rem]">100% 리얼 천연과즙</h2>
      <p className="w-full max-w-[450px] text-[18px] mt-[2rem] text-justify">
        TOKK은 100% 천연과즙만을 사용하여 신선하고 풍부한 과일의 맛을 그대로 담았습니다. 인공 첨가물
        없이 자연 그대로의 맛을 느껴보세요. 건강한 선택을 위해, 우리는 자연에서 온 순수함만을
        고집합니다. 여러분의 일상에 신선한 활력을 더하세요. 100% 천연과즙, 바로 자연이 주는 최고의
        선물입니다.
      </p>

      <View></View>
    </article>
  );
};

export default Article;
