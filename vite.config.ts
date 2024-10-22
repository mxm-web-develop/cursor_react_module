import { defineConfig, loadEnv } from "vite";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "vite-plugin-commonjs";
import svgr from "vite-plugin-svgr";
import path from "path";
import react from "@vitejs/plugin-react";
import generatePackageJson from "rollup-plugin-generate-package-json";
import dts from "vite-plugin-dts";
import version from "vite-plugin-package-version";
import pkg from "./package.json";
import terser from "@rollup/plugin-terser";
import copy from "rollup-plugin-copy";
// import tsconfigPaths from 'vite-tsconfig-paths';
// const Api_url = "";
// Start of Selection
// Start of Selection
// 修复Api_port的定义

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd());
  console.log(env);
  return defineConfig({
    plugins: [
      resolve(),
      commonjs(),
      svgr(),
      react(),
      version(),
      // tsconfigPaths(),
      dts({
        tsconfigPath: "./tsconfig.app.json",
        insertTypesEntry: true,
      }),
      generatePackageJson({
        outputFolder: "dist",
        baseContents: {
          name: env.VITE_PUBLISH_NAME,
          main: "index.js",
          license: "MIT",
          // @ts-expect-error 这里是因为样式文件可能没有类型定义
          style: "assets/style.css",
          types: "index.d.ts",
          private: false,
          version: pkg.version,
          author: pkg.author,
          type: "module",
          scripts: {
            test: "yarn link",
            disconnect: "yarn unlink",
            publish: "npm publish --access public",
          },
          dependencies: {},
          exports: {
            ".": "./index.js",
            "./styles.css": "./assets/lib_enter.css",
          },
        },
      }),
      copy({
        targets: [
          { src: "NPMREADME.md", dest: "dist", rename: "README.md" }, // 将 README.md 复制到 dist 目录
        ],
        hook: "writeBundle", // 在打包完成后执行
      }),
    ],
    resolve: {
      alias: [
        {
          find: "@", // 别名
          replacement: path.resolve(__dirname, "src"), // 别名对应地址
        },
      ],
    },
    esbuild: {
      charset: "ascii",
    },
    build: {
      outDir: "dist",
      lib: {
        entry: path.resolve(__dirname, "src/application/lib_enter.ts"),
        formats: ["es"],
        fileName: (format) => `index.${format === "es" ? "js" : "umd.js"}`,
      },
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          entryFileNames: `index.js`,
          assetFileNames: `assets/[name].[ext]`,
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
          plugins: [
            terser(), // 代码压缩
          ],
        },
      },
      cssCodeSplit: true, // 启用 CSS 代码分割
    },
    server: {
      host: "0.0.0.0",
      port: 8888,
      // proxy: {
      //   "/proxy": {
      //     // target: "http://10.64.17.78:9001",
      //     target: `${process.env.VITE_APP_VERSION}/`,
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/proxy/, ""),
      //   },
      // },
    },
  });
};
