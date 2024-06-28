import Lenis from "lenis";
import { ReactNode, useEffect } from "react";

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const lenis = new Lenis({
    smoothWheel: true,
    syncTouch: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    wheelMultiplier: 0.5,
    duration: 1.2,
    touchMultiplier: 2,
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
