import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist', // Output directory
    sourcemap: false, // Disable source maps for security
    minify: 'terser', // Minify using Terser
    chunkSizeWarningLimit: 1000, // Adjust chunk size limit
  },
  server: {
    open: true, // Auto-open browser in development
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
