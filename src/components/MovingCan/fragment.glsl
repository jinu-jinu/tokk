precision highp float;

varying vec2 vUv;
uniform sampler2D uTex;

void main () {
  vec2 uv = vUv;
  
  vec4 tex = texture2D(uTex, uv);
  tex.rgb -= 0.25;

  csm_DiffuseColor = vec4(tex.rgb, 1.);

}