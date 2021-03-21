import { defineConfig } from 'vite'
import pugPlugin from 'vite-plugin-pug'

export default defineConfig({
  plugins: [pugPlugin()],
  server: { port: 9001 },
})
