uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;
attribute float aRands;

varying float vRand;

vec4 setPosition(vec4 modelPosition) {
    // modelPosition.z += aRands * 0.2;

    return modelPosition;
}

void main() {
    vec4 projectionPosition = 
    projectionMatrix * 
    viewMatrix * 
    setPosition(modelMatrix * vec4(position, 1.0));

    vRand = aRands;

    gl_Position = projectionPosition;
}