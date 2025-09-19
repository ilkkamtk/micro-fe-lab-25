import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mediastore',
      filename: 'remoteEntry.js',
      exposes: {
        './MediaContext': './src/contexts/MediaContext.tsx',
        './UserContext': './src/contexts/UserContext.tsx',
        './contextHooks': './src/hooks/contextHooks.ts',
        './apiHooks': './src/hooks/apiHooks.ts',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 3001, // Set the desired port here
  },
  preview: {
    port: 3001, // Set the desired port here
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
  },
});
