import BubbleText from "../../components/BubbleText";

const Title = () => {
  const title = ["W", "H", "A", "T", "'", "S", " ", "T", "O", "K", "K", "?"];
  return (
    <div className="flex-[0.3] w-full flex justify-center items-end">
      <BubbleText title={title} />
    </div>
  );
};

export default Title;
