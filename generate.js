const fs = require("node:fs");
const { exit } = require("node:process");
const name = process.argv[2];
if (name.toLocaleLowerCase() === "common") {
  console.log("ERROR! 'common' is specially name");
  exit();
}
const PATH = `./src/shaders/${name}`;

const fragmentShaderCode = `/* ↓ When using RawShaderMaterial, please uncomment the following. */
// precision mediump float;

#include <common>
void main() {
    gl_FragColor = getAllColor(255, 255, 255, 1.0);
}`;

const vertexShaderCode = `/* ↓ When using RawShaderMaterial, please uncomment the following. */
// uniform mat4 projectionMatrix;
// uniform mat4 viewMatrix;
// uniform mat4 modelMatrix;
// attribute vec3 position;

vec4 setPosition(vec4 modelPosition) {
    return modelPosition;
}

void main() {
    vec4 projectionPosition = 
    projectionMatrix * 
    viewMatrix * 
    setPosition(modelMatrix * vec4(position, 1.0));

    gl_Position = projectionPosition;
}
`;

const three_jsInit = `import fragmentShader from "./fragmentShader.glsl";
import vertexShader from "./vertexShader.glsl";
import * as THREE from "three";

const shader: THREE.ShaderMaterialParameters = {
  vertexShader,
  fragmentShader,
};

/** Declare the "Geometry". */
`;

fs.mkdirSync(PATH);
console.log("Initialize shader...");
fs.writeFileSync(PATH + "/fragmentShader.glsl", fragmentShaderCode);
fs.writeFileSync(PATH + "/vertexShader.glsl", vertexShaderCode);
console.log("Importing shader...");
fs.writeFileSync(
  PATH + `/${name[0].toUpperCase()}${name.substring(1)}.ts`,
  three_jsInit
);

console.log("Created geometry with shader!!");
console.log("Good Luck☆～");
