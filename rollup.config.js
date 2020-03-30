import { terser } from "rollup-plugin-terser";

const config = {
    input: "src/js/main.js",
    output: [
        {
            file: "static/js/atomic-duck.bundle.js",
            format: "esm"
        }
    ],
    plugins: [terser()]
};

export default config;
