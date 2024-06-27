varying vec2 vUv;

uniform float uTime;
uniform float uScroll;
uniform sampler2D uTex;

void main() {
  vec2 uv = vUv;  
  // rgbshift
  // r값의 uv를 조정해서 잔상느낌을 만들어냄
  // sin, cos함수에 uTime으로 움직임을 만듥
  // uScroll(0 - 1) 값으로 시작과 끝을 만듬
  float r = texture2D(uTex, uv + vec2(sin(uTime * 10.) * .03, sin(uTime * 8.) * .05) * uScroll).r;
  vec2 gb = texture2D(uTex, uv + vec2(cos(uTime * 10.) * .03, cos(uTime * 8.) * .05) * uScroll).gb;
  vec3 textureEffect = vec3(r, gb);
  
  // 이미지가 위에서 아래로 자연스럽게 나타남
  float reveal = smoothstep(uScroll - 0.25, uScroll, uv.y);

  // 프린터의 끝부분 발광 효과
  float edge = smoothstep(uScroll - .2, uScroll - .1, uv.y) * smoothstep(uScroll, uScroll - .1, uv.y);
  vec3 printEffect = vec3(edge) * vec3(1., .5, .5);

  vec3 color = textureEffect * reveal + printEffect;
  float alpha = 1. - uScroll;

  gl_FragColor = vec4(color, reveal *alpha); 
}