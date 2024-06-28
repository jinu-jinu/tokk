import { Environment, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import vertex from "./vertex.glsl?raw";
import fragment from "./fragment.glsl?raw";
import { MotionValue, useSpring, useTransform } from "framer-motion";
import MovingCanMaterial from "./MovingCanMaterial";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useNodes, useTextures } from "../../store/asstesStore";

const MovingCan = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const nodes = useNodes();
  const textures = useTextures()!;

  const opts = {
    metalness: 0.5,
    roughness: 0.2,
    bumpMap: textures.bump,
    bumpScale: 0.4,
  };

  const can2 = useRef<any>(null!);
  const can3 = useRef<any>(null!);

  const y1 = useTransform(scrollYProgress, [0, 1], [12, -20]);
  const y2 = useTransform(scrollYProgress, [0, 1], [20, -25]);
  const y3 = useTransform(scrollYProgress, [0, 1], [25, -30]);
  const springOpt = { bounce: 1, damping: 40, stiffness: 120 };
  const y1Spring = useSpring(y1, springOpt);
  const y2Spring = useSpring(y2, springOpt);
  const y3Spring = useSpring(y3, springOpt);

  const viewPortWidth = useRef<number | null>(0);

  useFrame(({ viewport }) => {
    if (!can2.current && !can3.current) return;

    can2.current.matrixWorldNeedsUpdate = true;
    can3.current.matrixWorldNeedsUpdate = true;

    if (viewport.aspect < 0.6) {
      can2.current.visible = false;
      can3.current.visible = false;
    } else {
      can2.current.visible = true;
      can3.current.visible = true;
    }

    if (viewPortWidth.current === viewport.width) return;

    viewPortWidth.current = viewport.width;

    const newCan2X = viewport.width - 1;
    const newCan3X = -viewport.width + 1;
    can2.current.position.setX(newCan2X);
    can3.current.position.setX(newCan3X);
  });

  return (
    <Suspense fallback={null}>
      <group dispose={null}>
        <Environment preset="city" background={false} environmentIntensity={1.2} />
        <directionalLight position={[-1, 3, 4]} intensity={1.2} />
        <pointLight position={[-1, 0.1, 3]} decay={0.5} intensity={1} />
        <pointLight position={[2, -2, 2]} decay={0.5} intensity={3} />

        <Float speed={3} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
          <motion.group
            position={[0, y1Spring, -10]}
            rotation={[Math.PI * -0.05, 0, Math.PI * -0.05]}
          >
            <mesh geometry={nodes.Circle.geometry}>
              <MovingCanMaterial
                vertexShader={vertex}
                fragmentShader={fragment}
                opts={opts}
                uniforms={{ uTex: { value: textures.color1 } }}
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
        </Float>

        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
          <motion.group
            ref={can2}
            position={[0, y2Spring, -10]}
            rotation={[Math.PI * -0.05, Math.PI * -0.1, Math.PI * 0.2]}
          >
            <mesh geometry={nodes.Circle.geometry}>
              <MovingCanMaterial
                vertexShader={vertex}
                fragmentShader={fragment}
                opts={opts}
                uniforms={{ uTex: { value: textures.color2 } }}
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
        </Float>

        <Float speed={5} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
          <motion.group
            ref={can3}
            position={[0, y3Spring, -10]}
            rotation={[Math.PI * 0.05, Math.PI * 0.1, -Math.PI * 0.2]}
          >
            <mesh geometry={nodes.Circle.geometry}>
              <MovingCanMaterial
                vertexShader={vertex}
                fragmentShader={fragment}
                opts={opts}
                uniforms={{ uTex: { value: textures.color3 } }}
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
        </Float>
      </group>
    </Suspense>
  );
};

export default MovingCan;
