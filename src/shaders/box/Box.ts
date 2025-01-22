import fragmentShader from "./fragment.glsl";
import vertexShader from "./vertex.glsl";
import * as THREE from "three";

export const boxGeometry = new THREE.BoxGeometry(5, 5, 5);

export const boxMaterial = new THREE.RawShaderMaterial({
  vertexShader,
  fragmentShader,
});
