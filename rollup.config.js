import babel from "rollup-plugin-babel";

const config = {
    input: "src/js/main.js",
    output: [
        {
            file: "static/js/atomic-duck.bundle.js",
            format: "esm"
        }
    ],
    plugins: [babel()]
};

export default config;
