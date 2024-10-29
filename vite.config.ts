import { defineConfig, loadEnv } from 'vite';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'vite-plugin-commonjs';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import react from '@vitejs/plugin-react';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import dts from 'vite-plugin-dts';
import version from 'vite-plugin-package-version';
import pkg from './package.json';
import copy from 'rollup-plugin-copy';
import fs from 'fs';
function shiftStaticFiles(directories: string[]) {
  return {
    name: 'shift-static-file',
    writeBundle() {
      directories.forEach((dir) => {
        const targetDir = path.resolve(__dirname, 'dist', dir);
        if (fs.existsSync(targetDir)) {
          fs.rmSync(targetDir, { recursive: true, force: true });
          console.log(`Deleted directory: ${targetDir}`);
        } else {
          console.warn(`Directory not found: ${targetDir}`);
        }
      });
    },
  };
}

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd());
  console.log(env);

  return defineConfig({
    base: './',
    plugins: [
      resolve(),
      commonjs(),
      svgr(),
      react(),
      version(),
      dts({
        tsconfigPath: './tsconfig.app.json',
        insertTypesEntry: true,
        include: ['src/application/**/*.ts'], // 仅包含 application 目录
      }),
      generatePackageJson({
        outputFolder: 'dist',
        baseContents: {
          name: env.VITE_PUBLISH_NAME || pkg.name,
          main: 'index.js',
          license: 'MIT',
          // @ts-expect-error 这里是因为样式文件可能没有类型定义
          style: 'assets/style.css',
          types: 'index.d.ts',
          private: false,
          version: pkg.version,
          author: pkg.author,
          type: 'module',
          scripts: {
            test: 'yarn link',
            disconnect: 'yarn unlink',
          },
          exports: {
            '.': './index.js',
            './style.css': './assets/style.css',
          },
        },
      }),
      copy({
        targets: [{ src: 'NPMREADME.md', dest: 'dist', rename: 'README.md' }],
        hook: 'writeBundle',
      }),
      shiftStaticFiles(['files']),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    esbuild: {
      charset: 'ascii',
    },
    // assetsInclude: ['**/*.mjs'], // 确保 Vite 能识别 .mjs 文件为资源
    build: {
      outDir: 'dist',
      lib: {
        entry: path.resolve(__dirname, 'src/application/lib_enter.ts'),
        formats: ['es'],
        fileName: (format) => `index.${format === 'es' ? 'js' : 'umd.js'}`,
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        input: {
          main: path.resolve(__dirname, 'src/application/lib_enter.ts'),
        },
        output: {
          dir: 'dist', // 确保输出在 dist 根目录
          entryFileNames: `index.js`,
          assetFileNames: `assets/[name].[ext]`,
          globals: {
            react: 'React',
            // 'react-dom': 'ReactDOM',
          },
        },
        // treeshake: true, // 启用 tree-shaking，减少无用代码
      },
    },
    server: {
      cors: true,
      host: '0.0.0.0',
      port: 8888,
    },
  });
};
