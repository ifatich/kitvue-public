import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  publicDir: false,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '/assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
    },
  },
  build: {
    sourcemap: false,
    cssCodeSplit: true,
    lib: {
      entry: 'src/index.js',
      name: 'KitVue',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'kitvue.js' : 'kitvue.cjs'),
      cssFileName: 'style',
    },
    rollupOptions: {
      external: ['vue', 'jquery'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          jquery: 'jQuery',
        },
      },
    },
  },
})
