import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    include: ['**/test/**/*.ts'],
    exclude: ['**/fixture/**', '**/node_modules/**']
  }
});
