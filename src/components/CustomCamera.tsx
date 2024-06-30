import { PerspectiveCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const remap = (n: number) => {
  const S = 2.2;
  const XL = 0.48;

  if (n < XL) return 1;
  if (n > S) return 0;

  const ratio = (S - n) / (S - XL);

  return ratio;
};

const lerp = (st: number, ed: number, t: number) => {
  const res = st + t * (ed - st);
  if (t > 0.01 && t < 0.15) return res - 0.2;
  if (t > 0.5 && t < 0.8) return res + 0.1;
  return res;
};

const CustomCamera = () => {
  const { viewport } = useThree();

  const v = viewport.height / viewport.width;
  const fov = lerp(55, 40, remap(v) * remap(v) * (remap(v) * 0.95 - remap(v) * 0.01));

  return <PerspectiveCamera makeDefault fov={fov} position={[0, 0, 7]} near={0.1} far={50} />;
};

export default CustomCamera;
