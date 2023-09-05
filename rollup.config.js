import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import image from "@rollup/plugin-image";
import babel from "rollup-plugin-babel";
// import replace from "rollup-plugin-replace";
import json from "rollup-plugin-json";
import externals from "rollup-plugin-node-externals";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import sourcemaps from "rollup-plugin-sourcemaps";

const packageJson = require("./package.json");

const NODE_ENV = process.env.NODE_ENV || "development";
// const outputFile = NODE_ENV === "production" ? "./lib/prod.js" : "./lib/dev.js";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      json(),
      externals({ deps: false, devDeps: false }),
      resolve({ jsnext: true, preferBuiltins: true, browser: true }),
      typescript({ tsconfig: "./tsconfig.json" }),
      image(),
      commonjs(),
      postcss(),
      sourcemaps(),
      babel({
        babelrc: false,
        presets: [
          [
            "env",
            {
              modules: false,
            },
          ],
          "stage-0",
          "react",
        ],
        exclude: [
          "node_modules/**",
          "../src/**/*.stories.mdx",
          "../src/**/*.stories.@(js|jsx|ts|tsx)",
          "../src/stories/**",
        ],
        plugins: ["external-helpers"],
      }),
      terser(),
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [
      { file: "dist/index.d.ts", format: "esm" },
      { sourcemap: true, file: "dist/@multiplica.js" },
    ],
    plugins: [dts()],
    external: [
      "react",
      "react-dom",
      "react-router",
      "@mui/icons-material",
      "@mui/material",
      "@mui/styles",
      "@mui/system",
      "react-is",
      "styled-components",
      "@react-keycloak/web",
      /\.css$/,
    ],
  },
];
