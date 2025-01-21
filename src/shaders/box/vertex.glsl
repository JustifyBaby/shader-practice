attribute float aRands;

varying float vRand;

vec4 setPosition(vec4 modelPosition) {
    return modelPosition;
}

void main() {
    vec4 projectionPosition = 
    projectionMatrix * 
    modelViewMatrix * 
    setPosition(modelMatrix * vec4(position, 1.0));

    vRand = aRands;

    gl_Position = projectionPosition;
}