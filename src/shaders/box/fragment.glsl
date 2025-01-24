#include <common>

void main() {
    gl_FragColor = vec4(
        getColor(20),
        getColor(100),
        getColor(220),
        1.0);
}