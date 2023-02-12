import { createUnplugin } from 'unplugin';
import add from 'unplugin-starter-core';
import { IOps } from './types';

export const unplugin = createUnplugin((opts: IOps = {}) => {
  const {} = opts;
  return {
    name: 'Starter',
    buildStart() {
      console.log(add(1, 2));
    }
  };
});

export const { esbuild, rollup, vite, webpack } = unplugin;

export default unplugin;
