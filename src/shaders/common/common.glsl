float COLOR_BASE = 255.;

vec4 getAllColor(int r, int g, int b, float a) {
    return vec4(
        float(r) / COLOR_BASE,
        float(g) / COLOR_BASE,
        float(b) / COLOR_BASE,
        a);
}

float getColor(int colorValue) {
    float flColVal = float(colorValue);
    return flColVal / COLOR_BASE;
}