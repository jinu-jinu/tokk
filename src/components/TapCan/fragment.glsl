precision highp float;

uniform float uTime;
uniform float uHover;
varying vec2 vUv;
varying vec3 vPosition;
uniform sampler2D uTex1;
uniform sampler2D uTex2;
uniform float uProgress;

void main () {
  vec2 uv = vUv;
  
  float progress = smoothstep(.0, 1., (uProgress * 2. + uv.x - 1.));
  
  vec4 tex1 = texture2D(uTex1, (uv + .5) * (1. - progress) - .5);
  vec4 tex2 = texture2D(uTex2, (uv - .5) * progress + .5);

  tex1.rgb -= 0.25;
  tex2.rgb -= 0.25;

  
  vec4 color = mix(tex1, tex2, progress);

   vec3 nor = normalize(vNormal);
    if (!gl_FrontFacing) nor *= -1.;
    
    float stripes = mod((vPosition.y - uTime * .1) * 15., 1.);
    stripes = pow(stripes, 3.);

    float stripesHover = sin(uTime * 10.) * uHover;
    stripes += stripesHover;

    vec3 viewDirection = normalize(vPosition - cameraPosition);
    float fresnel = dot(viewDirection, nor) + .6;
    fresnel = pow(fresnel, 2.);

    float fresnelHover = cos(uTime * 5.) * .1 * uHover;
    fresnel += fresnelHover;


    float holographic = stripes * fresnel;
    holographic += fresnel;

    vec3 final = color.rgb + holographic;

  csm_DiffuseColor = vec4(final, 1.);

}