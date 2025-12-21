import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // 👈 Ruta relativa, funciona mejor con HashRouter
  build: {
    target: 'esnext',
    outDir: 'dist'
  }
})
