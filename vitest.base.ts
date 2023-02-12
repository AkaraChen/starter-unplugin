import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    include: ['**/*.ts'],
    exclude: ['**/fixture/**', '**/node_modules/**', '**/**.config.ts']
  }
});
