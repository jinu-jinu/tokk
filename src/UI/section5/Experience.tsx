import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import vertexShader from "./glsl/vertex.glsl";
import fragmentShader from "./glsl/fragment.glsl";
import { MotionValue, useTransform } from "framer-motion";
import { useTextures } from "../../store/asstesStore";

const Experience = ({
  scrollY,
  textureKey,
  scrollOffset,
}: {
  scrollY: MotionValue<number>;
  textureKey: string;
  scrollOffset: any;
}) => {
  const { viewport } = useThree();
  const texture = useTextures()!;
  const uniforms = useRef({
    uTime: { value: 0 },
    uScroll: { value: 1 },
    uTex: { value: texture[textureKey] },
  });

  const progress = useTransform(scrollY, [scrollOffset[0], scrollOffset[1]], [1, 0]);
  progress.on("change", (e) => {
    uniforms.current.uScroll.value = e;
  });

  useFrame(({ clock }) => {
    const et = clock.elapsedTime;
    uniforms.current.uTime.value = et;
  });

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height, 32, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
        transparent
      />
    </mesh>
  );
};

export default Experience;
