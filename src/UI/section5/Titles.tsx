import BubbleText from "../../components/BubbleText";

const Titles = () => {
  const title = ["W", "I", "T", "H", " ", "T", "O", "K", "K", "!"];

  return (
    <header className="px-[2rem] flex flex-col items-center gap-y-[1rem] pt-[93px] md:pt-[120px]">
      <BubbleText title={title} />
      <p className="font-Noto font-medium text-[1rem] lg:text-[1.5vmax] text-center max-w-[45vmax]">
        Tokk과 함께라면 당신도 패셔니스타! 스타일리시한 도시의 거리에서 Tokk을 손에 든 당신, 그
        자체로 트렌드를 선도하는 감각적인 예술가가 된 것 같은 기분을 느껴보세요.
      </p>
    </header>
  );
};

export default Titles;