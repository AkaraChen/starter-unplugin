import path from 'path';
import { rollup as build } from 'rollup';
import { rollup } from 'unplugin-starter';

test('rollup', async () => {
  expect(async () => {
    await build({
      input: path.resolve(__dirname, 'fixture/index.js'),
      plugins: [rollup()]
    });
  }).not.toThrow();
});
