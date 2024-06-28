varying vec2 vUv;
varying vec3 vPosition;

void main () {
  vec3 newPosition = position;
  csm_Position = newPosition;

  vUv = uv;
  vPosition = newPosition;
}