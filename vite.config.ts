import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
const svgrPlugin = require('vite-plugin-svgr')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgrPlugin({
      svgrOptions: {
        icon: true
      }
    }),
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    })
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  },
  optimizeDeps: {
    include: ['@emotion/react']
  }
})
