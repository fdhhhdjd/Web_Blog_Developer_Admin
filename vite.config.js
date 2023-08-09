//* LIBRARY
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { fileURLToPath } from 'node:url';

//* SETUP VITE
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      verbose: false,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteCompression({
      verbose: true,
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],

  // port default
  server: {
    port: 5173,
  },

  // Default
  base: '/',

  resolve: {
    alias: [
      {
        find: '@images',
        replacement: fileURLToPath(new URL('./src/assets/', import.meta.url)),
      },
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ],
  },
});
