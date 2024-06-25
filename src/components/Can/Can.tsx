import { Environment, Float } from "@react-three/drei";
import CustomMaterial from "./CustomMaterial";
import { useMemo, useRef } from "react";
import vertex from "./vertex.glsl?raw";
import fragment from "./fragment.glsl?raw";
import { useCanChangeActions } from "../../store/CanChangeStore";
import { AssetTextureType } from "../../types";
import { animate } from "framer-motion";
import { Group, Material, Mesh } from "three";
import { useFrame } from "@react-three/fiber";

const Can = ({ nodes, textures }: { nodes: any; textures: AssetTextureType }) => {
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
    }),
    []
  );

  const light = useRef(null!);
  const tapMesh = useRef<Mesh>(null!);

  useFrame(({ viewport }) => {
    const { aspect } = viewport;
    if (!tapMesh.current) return;
    const maxScale = aspect > 0.6 ? 0.6 : aspect;
    tapMesh.current.scale.set(maxScale, maxScale, maxScale);
    tapMesh.current.position.setX(viewport.width / 4);
    tapMesh.current.position.setY((viewport.height / 3) * 0.9);

    tapMesh.current.matrixWorldNeedsUpdate = true;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.1, 0.1]}>
      <mesh
        ref={tapMesh}
        onPointerOver={(e) => {
          if (!tapMesh.current) return;

          const mat = tapMesh.current.material as Material;
          mat.opacity = 0.6;

          e.stopPropagation();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(e) => {
          if (!tapMesh.current) return;

          const mat = tapMesh.current.material as Material;
          mat.opacity = 1;

          e.stopPropagation();
          document.body.style.cursor = "default";
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
            ease: [0.645, 0.045, 0.355, 1.0],
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
          canRef.current.matrixWorldNeedsUpdate = true;
        }}
      >
        <circleGeometry />
        <meshStandardMaterial map={textures.tap} roughness={1} transparent opacity={1} />
      </mesh>
      {/* 스크롤 그룹 */}
      <group dispose={null} position={[0, -2, 0]}>
        <group>
          <Environment preset="city" background={false} environmentIntensity={1.2} />
          <directionalLight position={[-1, 3, 4]} intensity={1.2} />
          <pointLight ref={light} position={[-1, 0.1, 3]} decay={0.5} intensity={1} />
          <pointLight position={[2, -2, 2]} decay={0.5} intensity={3} />

          {/* 버튼 회전 그룹 */}
          <group ref={canRef} position={[0, 0, 1]}>
            <mesh geometry={nodes.Circle.geometry}>
              <CustomMaterial
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
      </group>
    </Float>
  );
};

export default Can;
