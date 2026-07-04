import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// Multi-page build: the landing page (index.html) + the thank-you page
// (thank-you.html). Both are emitted to dist/ so the thank-you page is
// available at  <your-domain>/thank-you.html
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        thankyou: resolve(__dirname, 'thank-you.html'),
      },
    },
  },
})
