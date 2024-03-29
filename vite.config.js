
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from 'fs/promises'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/renue-test-front',
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js/,
    exclude: [],
  },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     plugins: [
  //       {
  //         name: "load-js-files-as-jsx",
  //         setup(build) {
  //           build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
  //             loader: "jsx",
  //             contents: await fs.readFile(args.path, "utf8"),
  //           }));
  //         },
  //       },
  //     ],

  //   }
  // },
  build: {
    minify: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[name]_[local]_[hash:base64:2]",
    },
  },
});