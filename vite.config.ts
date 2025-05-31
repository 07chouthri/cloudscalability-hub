
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
    // Enhanced build configuration for performance
    target: 'es2020',
    minify: 'terser',
    cssMinify: true,
    assetsInlineLimit: 2048, // 2kb - reduced for better caching
    chunkSizeWarningLimit: 800, // Reduced warning limit
    rollupOptions: {
      output: {
        // Optimized chunk splitting strategy
        manualChunks: {
          // Core React dependencies
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'query': ['@tanstack/react-query'],
          
          // UI components grouped by usage patterns
          'ui-core': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-tabs',
            '@radix-ui/react-accordion'
          ],
          'ui-form': [
            '@radix-ui/react-label',
            '@radix-ui/react-select',
            '@radix-ui/react-checkbox',
            'react-hook-form'
          ],
          'ui-feedback': [
            '@radix-ui/react-toast',
            '@radix-ui/react-alert-dialog',
            'sonner'
          ],
          
          // Charts and data visualization
          'charts': ['recharts'],
          
          // Animation and media
          'animations': ['framer-motion', '@lottiefiles/dotlottie-react'],
          
          // Utilities
          'utils': [
            'date-fns', 
            'class-variance-authority', 
            'tailwind-merge', 
            'clsx',
            'lucide-react'
          ],
          
          // SEO and meta
          'seo': ['react-helmet-async'],
        },
        
        // Optimize asset naming for better caching
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `assets/js/[name]-[hash].js`;
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          if (assetInfo.name?.match(/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: true,
        pure_funcs: mode === 'production' ? ['console.log', 'console.info'] : []
      },
      mangle: {
        safari10: true
      }
    },
    
    // Enable source maps for production debugging (optional)
    sourcemap: mode === 'development',
    
    // Optimize CSS
    cssCodeSplit: true,
  },
  
  // Performance optimizations
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query',
      'lucide-react'
    ],
    exclude: ['@lottiefiles/dotlottie-react']
  },
  
  // Enable experimental features for better performance
  esbuild: {
    target: 'es2020',
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
}));
