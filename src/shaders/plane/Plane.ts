import fragmentShader from "./fragmentShader.glsl";
import vertexShader from "./vertexShader.glsl";
import * as THREE from "three";

export const planeGeometry = new THREE.PlaneGeometry(1, 1, 32, 32);

export const planeMaterial = new THREE.RawShaderMaterial({
  vertexShader,
  fragmentShader,
});
