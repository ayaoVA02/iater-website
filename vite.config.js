import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
// https://vite.dev/config/
export default defineConfig({
  root: './client',
  plugins: [
    react(),
    svgr(
      {
        svgrOptions: {
          icon: true,
          // This will transform your SVG to a React component
          exportType: "named",
          namedExport: "ReactComponent",
        },
      }
    )
  ],
  server: {
    host: '0.0.0.0',
      port: 5173, 
    allowedHosts: ['iater-web-front.onrender.com'],
    proxy: {
      '/api': 'http://192.168.100.13:5000'
    }
  },
  // server: {
  //   port: 5173, 
  // },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'assets'
  },
base: './' 
})
