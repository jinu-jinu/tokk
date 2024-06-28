varying vec2 vUv;

uniform float uTime;
uniform float uScroll;
uniform sampler2D uTex;

void main() {
  vec2 uv = vUv;
  
  float r = texture2D(uTex, uv + vec2(sin(uTime * 10.) * .03, sin(uTime * 8.) * .05) * uScroll).r;
  vec2 gb = texture2D(uTex, uv + vec2(cos(uTime * 10.) * .03, cos(uTime * 8.) * .05) * uScroll).gb;
  vec3 textureEffect = vec3(r, gb);
  
  float reveal = smoothstep(uScroll - 0.25, uScroll, uv.y);

  float edge = smoothstep(uScroll - .2, uScroll - .1, uv.y) * smoothstep(uScroll, uScroll - .1, uv.y);
  vec3 printEffect = vec3(edge) * vec3(1., .5, .5);

  vec3 color = textureEffect * reveal + printEffect;
  float alpha = 1. - uScroll;

  gl_FragColor = vec4(color, reveal * alpha); 
}