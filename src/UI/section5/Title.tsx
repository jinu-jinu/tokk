import BubbleText from "../../components/BubbleText";

const Title = () => {
  const title = ["W", "I", "T", "H", " ", "T", "O", "K", "K", "!"];
  return (
    <div className=" w-full flex justify-center items-end pt-[93px] md:pt-[120px]">
      <BubbleText title={title} />
    </div>
  );
};

export default Title;
