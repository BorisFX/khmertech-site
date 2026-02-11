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
      name: 'copy-index-to-404',
      closeBundle() {
        const dist = path.resolve(__dirname, 'dist')
        if (fs.existsSync(path.join(dist, 'index.html'))) {
          fs.copyFileSync(path.join(dist, 'index.html'), path.join(dist, '404.html'))
        }
      }
    }
  ],
})
