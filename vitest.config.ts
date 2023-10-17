import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitest.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '@assets': path.resolve(__dirname, '/src/assets'),
      '@components': path.resolve(__dirname, '/src/components'),
    },
  },
  test: {
    globals: true,
    coverage: {
      provider: 'v8',
    },
    environment: 'jsdom',
    setupFiles: './vitest-setup.js',
  },
});
