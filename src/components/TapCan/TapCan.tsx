import { Environment, Float } from "@react-three/drei";
import TapCanMaterial from "./TapCanMaterial";
import { Suspense, useMemo, useRef } from "react";
import vertex from "./vertex.glsl?raw";
import fragment from "./fragment.glsl?raw";
import { animate, useScroll, useSpring, useTransform } from "framer-motion";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useNodes, useTextures } from "../../store/asstesStore";
import { useCanChangeActions } from "../../store/CanChangeStore";

const TapCan = () => {
  const nodes = useNodes();
  const textures = useTextures()!;
  // sdfadf

  const opts = {
    metalness: 0.5,
    roughness: 0.2,
    bumpMap: textures.bump,
    bumpScale: 0.4,
  };
  const canRef = useRef<Group>(null!);
  const trigger = useRef(false);
  const current = useRef(0);
  const next = useRef(0);

  const handleCurrentCan = useCanChangeActions("handleCurrentCan");
  const handleNextCan = useCanChangeActions("handleNextCan");

  const textureMapping = useMemo(() => [textures.color1, textures.color2, textures.color3], []);

  const uniforms = useMemo(
    () => ({
      uProgress: { value: 0 },
      uTex1: { value: textureMapping[current.current] },
      uTex2: { value: textureMapping[next.current] },
      uTime: { value: 0 },
      uHover: { value: 0 },
    }),
    []
  );

  useFrame(({ clock }) => {
    const et = clock.elapsedTime;
    uniforms.uTime.value = et;
  });

  const { scrollYProgress } = useScroll({
    offset: ["0vh", "70vh"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-2, -5]);
  const ySpring = useSpring(y, { bounce: 1, damping: 30, stiffness: 150 });

  return (
    <Suspense fallback={null}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.1, 0.1]}>
        {/* 스크롤 그룹 */}
        <motion.group
          position={[0, ySpring, 0]}
          onPointerOver={(e) => {
            e.stopPropagation();
            document.body.style.cursor = "pointer";
            console.log("asdf");

            animate(0, 1, {
              duration: 0.3,
              ease: "easeIn",
              onUpdate: (n) => {
                uniforms.uHover.value = n;
              },
            });
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            document.body.style.cursor = "default";
            animate(1, 0, {
              duration: 0.3,
              ease: "easeOut",
              onUpdate: (n) => {
                uniforms.uHover.value = n;
              },
            });
          }}
          onClick={() => {
            if (trigger.current) return;
            trigger.current = true;

            next.current += 1;
            if (next.current > 2) next.current = 0;

            uniforms.uTex1.value = textureMapping[current.current];
            uniforms.uTex2.value = textureMapping[next.current];
            handleNextCan(next.current);

            animate(0, 1, {
              duration: 1,
              ease: "easeInOut",
              onUpdate: (n) => {
                uniforms.uProgress.value = n;

                const rotation = n * 2;
                canRef.current.rotation.set(0, Math.PI * rotation, Math.PI * rotation);
              },
              onComplete: () => {
                trigger.current = false;
                current.current = next.current;
                handleCurrentCan(next.current);
              },
            });
          }}
        >
          <group>
            <Environment preset="city" background={false} environmentIntensity={1.2} />
            <directionalLight position={[-1, 3, 4]} intensity={1.2} />
            <pointLight position={[-1, 0.1, 3]} decay={0.5} intensity={1} />
            <pointLight position={[2, -2, 2]} decay={0.5} intensity={3} />

            {/* 버튼 회전 그룹 */}
            <group ref={canRef} position={[0, 0, 1]}>
              <mesh geometry={nodes.Circle.geometry}>
                <TapCanMaterial
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
            </group>
          </group>
        </motion.group>
      </Float>
    </Suspense>
  );
};

export default TapCan;
