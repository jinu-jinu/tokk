import { useProgress } from "@react-three/drei";
import { useEffect } from "react";
import { useLoadingActions } from "../../store/loadingStore";
import { animate, motionValue, motion } from "framer-motion";

const Loading = () => {
  const { loaded } = useProgress();
  const total = 15;
  const handleAssetDownload = useLoadingActions("handleAssetDownload");
  const opacity = motionValue(1);

  useEffect(() => {
    if (loaded === total) {
      console.log("download complete");
      handleAssetDownload(true);
      animate(opacity, 0, {
        duration: 1,
        ease: "easeInOut",
      });
    }
  }, [loaded]);

  return (
    <motion.div
      style={{
        opacity,
      }}
      className="w-full h-[100dvh] bg-black fixed top-0 left-0 z-[100] pointer-events-none flex justify-center items-center font-black text-[7vmax] font-LOTTERIACHAB"
    >
      <p className="relative overflow-hidden text-[#fff]">TOKK</p>
    </motion.div>
  );
};

export default Loading;
