import CSM from "three-custom-shader-material";
import { MeshStandardMaterial, MeshStandardMaterialParameters, Texture } from "three";

const RollingCanMaterial = ({
  opts,
  vertexShader,
  fragmentShader,
  uniforms,
}: {
  opts: MeshStandardMaterialParameters;
  vertexShader: string;
  fragmentShader: string;
  uniforms: {
    uTex1: {
      value: Texture;
    };
    uTex2: {
      value: Texture;
    };
    uTex3: {
      value: Texture;
    };
  };
}) => {
  const baseMaterial = new MeshStandardMaterial(opts);

  return (
    <CSM
      baseMaterial={baseMaterial}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms}
    />
  );
};

export default RollingCanMaterial;
