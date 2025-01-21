import fragmentShader from "./fragment.glsl";
import vertexShader from "./vertex.glsl";
import * as THREE from "three";

export const boxGeometry = new THREE.BoxGeometry(5, 5, 5);

const count = boxGeometry.attributes["position"].count;
const rands = new Float32Array(count);

for (let i = 0; i < count; i++) {
  rands[i] = Math.random();
}

boxGeometry.setAttribute("aRands", new THREE.BufferAttribute(rands, 1));

export const boxMaterial = new THREE.RawShaderMaterial({
  vertexShader,
  fragmentShader,
});
