import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, '/src/assets'),
      '@components': path.resolve(__dirname, '/src/components'),
      '@hooks': path.resolve(__dirname, '/src/hooks'),
      '@providers': path.resolve(__dirname, '/src/providers'),
      '@utils': path.resolve(__dirname, '/src/utils'),
    },
  },
});
