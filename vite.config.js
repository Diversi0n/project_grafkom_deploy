import { defineConfig } from 'vite';

export default defineConfig({
  base: '/project_grafkom/', //if deploying under a nested path
  build: {
    outDir: 'dist', // Ensure the output directory is specified
    rollupOptions: {
      input: './index.html', // Ensure the main entry point is specified
    }
  }
});