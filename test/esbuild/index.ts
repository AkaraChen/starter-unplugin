import { build } from 'esbuild';
import { esbuild } from 'unplugin-starter';

test('esbuild', async () => {
  expect(() => {
    build({
      // @ts-ignore
      plugins: [esbuild()]
    });
  }).not.toThrow();
});
