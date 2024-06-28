precision highp float;

varying vec2 vUv;
uniform sampler2D uTex1;
uniform sampler2D uTex2;
uniform sampler2D uTex3;
uniform float uProgress;

void main () {
  vec2 uv = vUv;
  
  vec4 tex1 = texture2D(uTex1, uv);
  vec4 tex2 = texture2D(uTex2, uv);
  vec4 tex3 = texture2D(uTex3, uv);
  tex1.rgb -= 0.25;
  tex2.rgb -= 0.25;
  tex3.rgb -= 0.25;

  vec4 mix1 = mix(tex1, tex2, clamp(uProgress * 2., 0., 1.));
  vec4 mix2 = mix(mix1, tex3, clamp((uProgress - 0.5) * 2., 0., 1.));

  csm_DiffuseColor = mix2;

}