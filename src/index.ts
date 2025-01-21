import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import commonShader from "./shaders/common/common.glsl";
import { planeGeometry, planeMaterial } from "./shaders/plane/Plane";
// import { boxGeometry, boxMaterial } from "./shaders/box/Box";

THREE.ShaderChunk["common"] = commonShader;

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Canvas
const canvas = document.querySelector("canvas")!;

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */
// const textureLoader = new THREE.TextureLoader();

/**
 * Meshes
 */
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(planeMesh);

// const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
// scene.add(boxMesh);

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(1 / 4, 1 / 4, 1);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const animate = () => {
  controls.update();

  renderer.render(scene, camera);

  window.requestAnimationFrame(animate);
};

animate();
