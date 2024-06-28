import CSM from "three-custom-shader-material";
import { MeshStandardMaterial, MeshStandardMaterialParameters, Texture } from "three";

const MovingCanMaterial = ({
  opts,
  vertexShader,
  fragmentShader,
  uniforms,
}: {
  opts: MeshStandardMaterialParameters;
  vertexShader: string;
  fragmentShader: string;
  uniforms: {
    uTex: {
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

export default MovingCanMaterial;
