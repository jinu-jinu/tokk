import Lenis from "lenis";
import { ReactNode, useEffect, useMemo } from "react";
import { useIsAssetDownloaded } from "../store/loadingStore";

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const lenis = useMemo(
    () =>
      new Lenis({
        smoothWheel: true,
        syncTouch: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 0.5,
        duration: 1.2,
        touchMultiplier: 0.5,
      }),
    []
  );

  const isAssetDownloaded = useIsAssetDownloaded();

  useEffect(() => {
    if (!isAssetDownloaded) lenis.stop();
    else lenis.start();
  }, [isAssetDownloaded, lenis]);

  useEffect(() => {
    const raf = (cb: any) => {
      lenis.raf(cb);
      requestAnimationFrame(raf);

      return 0;
    };

    requestAnimationFrame(raf);
  }, []);

  return children;
};

export default SmoothScroll;
