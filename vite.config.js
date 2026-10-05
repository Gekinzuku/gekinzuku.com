import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Two fixes applied so `npm run build` output works when opened directly
// from the file:// protocol (i.e. double-clicking dist/index.html):
//
//   1. `base: './'`  -> relative asset URLs instead of absolute `/assets/...`
//                       (absolute paths resolve to the filesystem root on file://)
//   2. `viteSingleFile()` -> inlines every JS + CSS chunk into index.html,
//                       sidestepping the browser's CORS block on
//                       `<script type="module" src="file://...">`.
export default defineConfig({
  base: './',
  plugins: [svelte(), viteSingleFile()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    target: 'esnext',
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  }
})
