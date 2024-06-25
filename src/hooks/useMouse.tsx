import { useEffect, useState } from "react";

const useMouse = () => {
  const [mouse, setMouse] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      e.preventDefault();
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mouse;
};

export default useMouse;
