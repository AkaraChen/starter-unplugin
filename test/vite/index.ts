import path from 'path';
import { build, createServer } from 'vite';
import { vite } from 'unplugin-starter';

const opts = {
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'fixture/index.js')
    }
  },
  plugins: [vite()]
};

test('vite', async () => {
  expect(async () => {
    await build(opts);
  }).not.toThrow();
});

test('vite server', async () => {
  expect(async () => {
    const server = await createServer(opts);
    await server.listen();
  }).not.toThrow();
});
