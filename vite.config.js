//* LIBRARY
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { fileURLToPath } from 'node:url';
import { VitePWA } from 'vite-plugin-pwa';
// import { visualizer } from 'rollup-plugin-visualizer';
//* SETUP VITE
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // visualizer({
    //   template: 'treemap', // or sunburst
    //   open: true,
    //   gzipSize: true,
    //   brotliSize: true,
    //   filename: 'analyse.html', // will be saved in project's root
    // }),
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
    {
      name: 'vite-plugin-bundle-analyzer',
      analyze: true,
    },

    // Optimize case offline
    VitePWA({
      workbox: {
        globPatterns: ['**/*.{js,css,html}'],
      },
    }),
  ],

  // port default
  server: {
    // Frontend
    port: 5173,

    // Backend
    proxy: {
      // Proxy requests starting with /api/v1 to a different server
      '/api/v1': 'http://localhost:5000/api/admin/v1',

      // Proxy requests starting with /api/v2 to a different server
      '/api/v2': 'http://localhost:5000/api/admin/v2',
    },
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
      {
        find: '@components', // Example alias for components directory
        replacement: fileURLToPath(new URL('./src/components', import.meta.url)),
      },
    ],
  },

  // Optimize CSS
  css: {
    postcss: {
      plugins: [
        require('autoprefixer'), // Add vendor prefixes
        require('cssnano')(), // Minify CSS
      ],
    },
  },

  // Optimize JavaScript
  build: {
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.* statements
      },
    },
    // Enable source maps for better debugging
    sourcemap: true,
    // Code Splitting
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          // Đặt tên cho các tệp bundle lazy loaded
          if (id.includes('/src/pages/')) {
            return 'lazy-' + id.substr(id.lastIndexOf('/') + 1).replace('.vue', '');
          }
        },
      },
    },
  },

  // Optimize Images
  optimizeDeps: {
    include: ['vue', 'axios', 'lodash'], // Add commonly used dependencies here
    // Lazy Loading Routes
    entries: ['src/main.js'], // Specify entry points of your routes
  },

  // Enable production mode for better performance
  mode: 'production',

  // Use modern mode to serve modern JavaScript to modern browsers
  esbuild: {
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  },

  // Server-Side Rendering (SSR) and Prerendering
  ssr: {
    external: ['axios'], // Add external dependencies
  },

  // Add custom global variables accessible in your code
  define: {
    __VUE_OPTIONS_API__: false, // Disable Vue 3 Options API if using Composition API only
    __VUE_PROD_DEVTOOLS__: false, // Disable Vue Devtools in production build
    // Add your own global variables here
    MY_GLOBAL_VARIABLE: JSON.stringify('my-value'),
  },
});
