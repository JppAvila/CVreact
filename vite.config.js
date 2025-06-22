import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/CVreact/', // 👈 muy importante para GitHub Pages
  build: {
    target: 'esnext',
    outDir: 'dist'
  }
})
