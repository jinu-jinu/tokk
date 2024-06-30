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
    console.log(loaded, total);
    if (loaded === total) {
      console.log("download complete");
      handleAssetDownload(true);

      animate(opacity, 0, {
        duration: 1,
        ease: "easeInOut",
        onUpdate: (v) => {
          console.log(v);
        },
      });
    }
  }, [loaded]);

  return (
    <motion.div
      style={{
        opacity,
      }}
      className="w-full h-[100dvh] bg-black fixed top-0 left-0 z-[100] pointer-events-none"
    >
      Loading
    </motion.div>
  );
};

export default Loading;
