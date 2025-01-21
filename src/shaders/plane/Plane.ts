import fragmentShader from "./fragmentShader.glsl";
import vertexShader from "./vertexShader.glsl";
import * as THREE from "three";

export const planeGeometry = new THREE.PlaneGeometry(1, 1, 32, 32);
const count = planeGeometry.attributes["position"].count;
const rands = new Float32Array(count);

for (let i = 0; i < count; i++) {
  rands[i] = Math.random() * 2;
}
const varying = new THREE.BufferAttribute(rands, 1);

planeGeometry.setAttribute("aRands", varying);
console.log(varying);

export const planeMaterial = new THREE.RawShaderMaterial({
  vertexShader,
  fragmentShader,
});
