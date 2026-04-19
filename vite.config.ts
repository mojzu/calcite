import { defineConfig } from 'vite'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'
import { VitePWA } from 'vite-plugin-pwa'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
    wasm(),
    topLevelAwait(),
    VitePWA({
      registerType: 'prompt',
      manifest: {
        name: 'Calcite',
        short_name: 'Calcite',
        description: 'Scientific calculator with unit conversions',
        theme_color: '#4a9eff',
        background_color: '#1a1a1a',
        display: 'standalone',
        start_url: '/',
        id: '/',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
        ],
      },
      workbox: {
        // Precache all JS, CSS, HTML, WASM, and image assets
        globPatterns: ['**/*.{js,css,html,svg,png,wasm,webmanifest}'],
        runtimeCaching: [
          {
            // Serve stale ECB rates immediately; refresh in the background
            urlPattern: /\/ecb-rates\.xml$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'exchange-rates',
              expiration: { maxEntries: 1, maxAgeSeconds: 86_400 },
            },
          },
        ],
      },
    }),
  ],
  base: process.env['VITE_BASE_URL'] ?? '/',
  resolve: {
    alias: {
      'numbat-wasm': resolve('numbat-wasm-pkg/numbat_wasm.js'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
})
