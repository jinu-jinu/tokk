import { useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import vertexShader from "./glsl/vertex.glsl";
import fragmentShader from "./glsl/fragment.glsl";
import { MotionValue, useMotionValueEvent } from "framer-motion";

const Experience = ({ scrollY }: { scrollY: MotionValue<number> }) => {
  const { viewport } = useThree();
  const mesh1 = useRef<Mesh>(null!);
  const tex = useTexture("/images/look1.jpg");
  const uniforms = useRef({
    uTime: { value: 0 },
    uScroll: { value: 1 },
    uTex: { value: tex },
  });

  useMotionValueEvent(scrollY, "change", (e) => {
    uniforms.current.uScroll.value = 1 - e;
    console.log(e);
  });

  useFrame(({ clock }) => {
    const et = clock.elapsedTime;
    uniforms.current.uTime.value = et;
  });

  return (
    <>
      <mesh ref={mesh1}>
        <planeGeometry args={[viewport.width, viewport.height, 32, 32]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms.current}
          transparent
        />
      </mesh>
    </>
  );
};

export default Experience;
