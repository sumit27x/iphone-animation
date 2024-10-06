import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "sumit-gupta",
      project: "iphone-animation",
      // Ensure to set the right configuration for your production environment
      release: process.env.SENTRY_RELEASE || '1.0.0', // Optionally set your release version
      sourcemaps: {
        // This is necessary for Sentry to find your source maps
        upload: {
          include: ['./dist'], // Include your build directory
          // Adjust this if your build folder is different
        },
      },
    }),
  ],
  base: '/iphone-animation/', // Correct base URL for GitHub Pages
  build: {
    sourcemap: true, // Enable sourcemaps for debugging
  },
});
