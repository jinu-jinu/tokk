import { Environment, Float } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import vertex from "./vertex.glsl?raw";
import fragment from "./fragment.glsl?raw";
import { AssetTextureType } from "../../types";
import RollingCanMaterial from "./RollingCanMaterial";
import { MotionValue, useMotionValueEvent, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";

const RollingCan = ({
  nodes,
  textures,
  scrollY,
}: {
  nodes: any;
  textures: AssetTextureType;
  scrollY: MotionValue<number>;
}) => {
  const opts = {
    metalness: 0.5,
    roughness: 0.2,
    bumpMap: textures.bump,
    bumpScale: 0.4,
  };

  const uniforms = useMemo(
    () => ({
      uTex1: { value: textures.color1 },
      uTex2: { value: textures.color2 },
      uTex3: { value: textures.color3 },
      uProgress: { value: 0 },
    }),
    []
  );

  const posY = useTransform(scrollY, [0, 1], [-5, 5]);
  const rotX = useTransform(scrollY, [0, 1], [Math.PI * 0, -Math.PI * 6]);
  const springPosY = useSpring(posY, { bounce: 1, damping: 40, stiffness: 120 });
  const springRotX = useSpring(rotX, { bounce: 1, damping: 40, stiffness: 120 });

  // rotationX와 positionY를 같이 움직여줘야함
  useMotionValueEvent(scrollY, "change", (e) => {
    uniforms.uProgress.value = e;
  });

  return (
    <Suspense fallback={null}>
      <Float speed={5} floatIntensity={0.5} rotationIntensity={0.5} floatingRange={[-0.1, 0.1]}>
        <motion.group position={[0, springPosY, 0]}>
          <Environment preset="city" background={false} environmentIntensity={1.2} />
          <directionalLight position={[-1, 3, 4]} intensity={1.2} />
          <pointLight position={[-1, 0.1, 3]} decay={0.5} intensity={1} />
          <pointLight position={[2, -2, 2]} decay={0.5} intensity={3} />
          <motion.group position={[0, 0, 0]} rotation={[springRotX, 0, Math.PI * 0.5]}>
            <mesh geometry={nodes.Circle.geometry}>
              <RollingCanMaterial
                vertexShader={vertex}
                fragmentShader={fragment}
                opts={opts}
                uniforms={uniforms}
              />
            </mesh>
            <mesh geometry={nodes.Circle_1.geometry}>
              <meshStandardMaterial
                color={"#ffffff"}
                metalness={1}
                roughness={0.1}
                bumpMap={textures.bump}
                bumpScale={0.2}
                envMapIntensity={0.1}
              />
            </mesh>
          </motion.group>
        </motion.group>
      </Float>
    </Suspense>
  );
};

export default RollingCan;
