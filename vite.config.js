import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/quoteflow-pro/' : '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.js',
      injectRegister: false,
      includeAssets: [
        'apple-touch-icon.png',
        'icon-192.png',
        'icon-512.png'
      ],
      manifest: {
        name: 'QuoteFlow Pro',
        short_name: 'QuoteFlow',
        description: 'PWA professionale per richieste preventivo e assistenza tecnica.',
        theme_color: '#0f172a',
        background_color: '#f8fafc',
        display: 'standalone',
        start_url: '/quoteflow-pro/',
        scope: '/quoteflow-pro/',
        lang: 'it',
        orientation: 'portrait-primary',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      devOptions: {
        enabled: true
      },
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,png,svg,webmanifest}']
      }
    })
  ]
}));
