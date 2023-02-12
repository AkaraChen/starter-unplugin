import { defineConfig } from 'rollup';
import ts from 'rollup-plugin-ts';
import nodeResolve from '@rollup/plugin-node-resolve';

const config = defineConfig({
  input: './src/index.ts',
  plugins: [
    nodeResolve(),
    ts({
      tsconfig: './tsconfig.json'
    })
  ],
  external: ['unplugin']
});

export default defineConfig([
  Object.assign({}, config, {
    output: {
      file: './dist/index.js',
      format: 'cjs'
    }
  }),
  Object.assign({}, config, {
    output: {
      file: './dist/cjs.js',
      format: 'esm'
    }
  })
]);
