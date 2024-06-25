import { DataTexture, FloatType, RGBAFormat } from "three";

const boxTexture = (size: number) => {
  const len = size * size * 4;
  const data = new Float32Array(len);

  for (let i = 0; i < len; i++) {
    const stride = i * 4;

    data[stride] = (Math.random() - 0.5) * 2.0;
    data[stride + 1] = (Math.random() - 0.5) * 2.0;
    data[stride + 2] = (Math.random() - 0.5) * 2.0;
    data[stride + 3] = 1.0;
  }

  const res = new DataTexture(data, size, size, RGBAFormat, FloatType);
  res.needsUpdate = true;
  return res;
};

export { boxTexture };
