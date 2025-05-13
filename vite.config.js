import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   root: './client',
  plugins: [
    react(),

  ],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173,
    allowedHosts: ['iater-web-front.onrender.com'],
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
})
