import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  base: '/',
  server: {
    port: 3001
  },
  build: {
    chunkSizeWarningLimit: 1024,
    outDir: 'dist'
  }
});
