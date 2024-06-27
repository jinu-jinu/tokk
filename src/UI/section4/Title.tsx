import BubbleText from "../../components/BubbleText";

const Title = () => {
  const title = ["T", "O", "K", "K", " ", "F", "L", "A", "V", "O", "R"];
  return (
    <div className=" w-full flex justify-center items-end pt-[93px] md:pt-[120px]">
      <BubbleText title={title} />
    </div>
  );
};

export default Title;
