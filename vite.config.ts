import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-spa-routes',
      closeBundle() {
        const dist = path.resolve(__dirname, 'dist')
        const index = path.join(dist, 'index.html')
        if (fs.existsSync(index)) {
          // 404 fallback for GitHub Pages
          fs.copyFileSync(index, path.join(dist, '404.html'))
          // Physical /zh/ route for Chinese version
          fs.mkdirSync(path.join(dist, 'zh'), { recursive: true })
          fs.copyFileSync(index, path.join(dist, 'zh', 'index.html'))
        }
      }
    }
  ],
})
