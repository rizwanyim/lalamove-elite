import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Gunakan '/' untuk paparan localhost dan Vercel
  base: '/',
  build: {
    outDir: 'dist',
  }
})