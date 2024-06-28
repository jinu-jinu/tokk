import { Suspense, useRef } from "react";
import * as THREE from "three";
import vertex from "./glsl/vertex.glsl?raw";
import fragment from "./glsl/fragment.glsl?raw";
import simVertex from "./glsl/simVertex.glsl?raw";
import simFragment from "./glsl/simFragment.glsl?raw";
import { useFrame, createPortal } from "@react-three/fiber";
import { useFBO, useTexture } from "@react-three/drei";
import { boxTexture } from "../../utils/getDataTexture";

const SIZE = 32;

const particlesPosition = () => {
  const len = SIZE * SIZE;
  const particles = new Float32Array(len * 3);
  for (let i = 0; i < len; i++) {
    const i3 = i * 3;
    particles[i3 + 0] = (i % SIZE) / SIZE;
    particles[i3 + 1] = i / SIZE / SIZE;
  }
  return particles;
};

const Flowfield = () => {
  const normalTexture = useTexture("/images/normal.jpg");
  const pos = boxTexture(SIZE);

  const uniforms = useRef({
    uTexture: { value: new THREE.Texture() },
    uNormalTexture: { value: normalTexture },
  });
  const simUniforms = useRef({
    uTexture: { value: pos },
    uTime: { value: 0 },
  });

  const renderPos = particlesPosition();
  const bufferPos = new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0]);
  const bufferUV = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]);
  const bufferScene = new THREE.Scene();
  const bufferCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1);
  const renderTarget = useFBO(SIZE, SIZE, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    type: THREE.FloatType,
  });

  useFrame(({ gl, clock }) => {
    const et = clock.elapsedTime;
    gl.setRenderTarget(renderTarget);
    gl.clear();
    gl.render(bufferScene, bufferCamera);

    uniforms.current.uTexture.value = renderTarget.texture;
    simUniforms.current.uTime.value = et;

    gl.setRenderTarget(null);
  });

  return (
    <Suspense fallback={null}>
      {createPortal(
        <mesh>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={bufferPos.length / 3}
              array={bufferPos}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-uv"
              count={bufferUV.length / 2}
              array={bufferUV}
              itemSize={2}
            />
          </bufferGeometry>
          <shaderMaterial
            uniforms={simUniforms.current}
            fragmentShader={simFragment}
            vertexShader={simVertex}
          />
        </mesh>,
        bufferScene
      )}

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={renderPos.length / 3}
            array={renderPos}
            itemSize={3}
          />
        </bufferGeometry>
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          transparent
          depthWrite={false}
          fragmentShader={fragment}
          vertexShader={vertex}
          uniforms={uniforms.current}
        />
      </points>
    </Suspense>
  );
};

export default Flowfield;
