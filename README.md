# ITE6 React Conversion

This is a Vite + React conversion of your original static site.

Quick start:

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

Notes:
- The original `style.css` was copied into `src/style.css` and imported by the app.
- Original JS activities were ported into `src/activities.js`. Each activity function receives a DOM container element and renders into it.
- This initial conversion keeps behavior intact but uses direct DOM manipulation for activity rendering to match the original code quickly. I can further refactor activities into idiomatic React components if you want.
