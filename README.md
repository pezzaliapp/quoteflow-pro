# QuoteFlow Pro

PWA professionale per richieste preventivo e assistenza tecnica.

## Stack

- React + Vite
- Tailwind CSS
- vite-plugin-pwa
- Webhook Make.com

## Avvio locale

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Variabili ambiente

Copia `.env.example` in `.env` e inserisci i webhook reali:

```bash
VITE_MAKE_QUOTE_WEBHOOK=...
VITE_MAKE_SUPPORT_WEBHOOK=...
```

## Deploy GitHub Pages

- Repo consigliata: `quoteflow-pro`
- Mantieni `base: '/quoteflow-pro/'` in `vite.config.js`
- Aggiungi i secrets GitHub:
  - `VITE_MAKE_QUOTE_WEBHOOK`
  - `VITE_MAKE_SUPPORT_WEBHOOK`
- Push su `main`
- Abilita GitHub Pages con GitHub Actions

## Deploy Vercel

Se usi Vercel su root domain, imposta `base: '/'` in `vite.config.js`.
