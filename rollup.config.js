import vue from "rollup-plugin-vue";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postCss from "rollup-plugin-postcss";

export default [
  {
    input: "src/index.js",
    output: [
      {
        format: "esm",
        file: "dist/pgd-vue-ui-kit.mjs",
      },
      {
        format: "cjs",
        file: "dist/pgd-vue-ui-kit.js",
      },
    ],
    plugins: [vue(), peerDepsExternal(), postCss()],
  },
];
