
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import Inspect from "vite-plugin-inspect"; 

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && Inspect(), 
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Improve build configuration
    target: 'es2015',
    minify: 'terser',
    cssMinify: true,
    assetsInlineLimit: 4096, // 4kb
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Group chunks by related functionality
          vendors: ['react', 'react-dom', 'react-router-dom'],
          ui: [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-tabs'
          ],
          charts: ['recharts'],
          utils: ['date-fns', 'class-variance-authority', 'tailwind-merge', 'clsx'],
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
}));
