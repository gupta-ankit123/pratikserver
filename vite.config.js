import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // The root of your project
  build: {
    outDir: 'dist', // Build output directory
    rollupOptions: {
      input: './index.html', // Ensure the entry point is set correctly
    },
  },
});
