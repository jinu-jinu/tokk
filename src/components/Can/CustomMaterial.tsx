import CSM from "three-custom-shader-material";
import { MeshStandardMaterial, MeshStandardMaterialParameters, Texture } from "three";

const CustomMaterial = ({
  opts,
  vertexShader,
  fragmentShader,
  uniforms,
}: {
  opts: MeshStandardMaterialParameters;
  vertexShader: string;
  fragmentShader: string;
  uniforms: {
    uProgress: {
      value: number;
    };
    uTex1: {
      value: Texture;
    };
    uTex2: {
      value: Texture;
    };
  };
}) => {
  // useEffect(() => {
  //   if (!isAssetDownloaded) return;

  //   if (!isTransitionOut)
  //     animate(1, 0, {
  //       type: "tween",
  //       duration: 1,
  //       ease: "easeIn",
  //       onUpdate: (n) => {
  //         uniforms.uValue.value = n;
  //       },
  //     });

  //   if (isTransitionOut)
  //     animate(0, 1, {
  //       type: "tween",
  //       duration: 1,
  //       ease: "easeOut",
  //       onUpdate: (n) => {
  //         uniforms.uValue.value = n;
  //       },
  //       onComplete: () => {
  //         handleTransitionOut(false);
  //       },
  //     });
  // }, [isAssetDownloaded, isTransitionOut]);

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

export default CustomMaterial;
