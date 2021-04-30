import { defineConfig } from 'vite'
import pugPlugin from 'vite-plugin-pug'

const { resolve } = require('path')

export default defineConfig({
  plugins: [pugPlugin(undefined, { pagesUrl: './pages/' })],

  server: { port: 9001 },
  optimizeDeps: {
    // include: ['node_modules/gsap/ScrollTrigger'],
  },

  build: {
    rollupOptions: {
      input: {
        // need a better way to template
        main: resolve(__dirname, 'index.html'),
        page: resolve(__dirname, 'pages/page.html'),
        page2: resolve(__dirname, 'pages/page2.html'),
      },
    },
  },
})
