import { terser } from "rollup-plugin-terser";

const config = [
  {
    input: "src/js/main.js",
    output: [
      {
        file: "assets/js/atomic-duck.bundle.js",
        format: "iife",
      },
    ],
    plugins: [terser()],
  },
  {
    input: "src/js/search-widget.js",
    output: [
      {
        file: "assets/js/search-site.bundle.js",
        format: "iife",
      },
    ],
    plugins: [terser()],
  },
];

export default config;
