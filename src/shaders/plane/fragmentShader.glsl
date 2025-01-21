precision mediump float;

vec4 getColor(float r, float g, float b, float a) {
    float COLOR_BASE = 255.;
    return vec4(
        r / COLOR_BASE,
        g / COLOR_BASE,
        b / COLOR_BASE,
        a);
}

void main() {
    gl_FragColor = getColor(255.0, 12.0, 140.0, 1.0);
}