uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;

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