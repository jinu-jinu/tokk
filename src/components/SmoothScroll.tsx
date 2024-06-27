import Lenis from "lenis";
import { ReactNode, useEffect } from "react";

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const lenis = new Lenis({
    smoothWheel: true,
    syncTouch: true,
    lerp: 0.05,
    wheelMultiplier: 0.5,
    syncTouchLerp: 0.02,
    touchMultiplier: 0.4,
  });

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
