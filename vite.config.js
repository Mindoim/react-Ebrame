import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
    reporters: process.env.GITHUB_ACTIONS
        ? ['default', 'github-actions']
        : ['default'],
    coverage: {
      reporter: ['text', 'json-summary', 'lcov'],
      exclude: ['node_modules/', 'src/test/']
    }
  }
})