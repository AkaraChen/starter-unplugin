import path from 'path';
import Webpack from 'webpack';

test('webpack', async () => {
  const compiler = Webpack({
    entry: path.resolve(__dirname, 'fixture/index.js')
  });
  expect(() => {
    compiler.run(() => {});
  }).not.toThrow();
});
