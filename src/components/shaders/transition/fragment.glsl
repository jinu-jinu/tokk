varying vec2 vUv;
uniform sampler2D uTex;
uniform float uValue;

#include ../includes/simplexNoise3d.glsl


void main () {
  vec4 color = texture2D(uTex, vUv);

  // 노이즈 트랜지션으로 변경
  float n = simplexNoise3d(vec3(vUv * 5.0, .25)) * 0.5 + 0.5;
  // float m = step(1., n);
  float m = step(0., n);


  vec3 colA = vec3(0.);
  vec3 colB = vec3(.02);
  vec3 col = mix(colA, colB, .3 * color.r);



  csm_DiffuseColor = vec4(col, m);

}

/*
  색상 만들어놓기

  deep black: .0
  glossy black: .02
  stone gray: .1 

  space blue: vec3(0.004,0.01,0.08);
  sky blue: vec3(0.1,0.3,.5);
  
  grass green: vec3(.1,0.3,0.);
  moss green: vec3(.01,0.15,0.01);
  
  mustad yellow: vec3(.4,0.3,0.);
  valencia orange: vec3(.5,0.16,0.);
  
  red
  coral red: vec3(.5,0.03,0.1);
  red: vec3(0.4,0.001,0.01);

  special
  frozen purple: vec3(0.2,0.1,.5);
  바닐라 베이지: vec3(0.3,0.25,0.08);
*/