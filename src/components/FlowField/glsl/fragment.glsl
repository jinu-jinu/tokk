uniform sampler2D uNormalTexture;

void main() {
vec2 st = gl_PointCoord.xy;

  float disc = length(st - vec2(.5));
  float alpha = smoothstep(.5, .48, disc);

  vec4 tex = texture2D(uNormalTexture, st);
  vec3 normal = vec3(tex.rg * 2. - 1., 0.);
  normal.z = sqrt(1. - normal.x * normal.x - normal.y * normal.y);
  normal = normalize(normal);

  vec3 lightPos = vec3(1.);
  float diffuse = max(.4, dot(normal, normalize(lightPos)));
  vec3 color1 = vec3(0.58, 0.9, 0.98);


  gl_FragColor = vec4(color1, alpha * diffuse * .5);
}
