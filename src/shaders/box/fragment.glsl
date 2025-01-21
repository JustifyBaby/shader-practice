#include <common>

varying float vRand;

void main() {
    gl_FragColor = vec4(
        getColor(255),
        normalize(vRand),
        vRand,
        1.0);
}