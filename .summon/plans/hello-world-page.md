---
status: implemented
title: Hello World home page
---

1. Scaffold the project files at the repo root: `package.json` (ESM, npm, scripts for dev/build/preview), `vite.config.ts` (React plugin, `@tailwindcss/vite`, `@tanstack/router-plugin/vite`, `@/` alias to `src/`), `tsconfig.json` + `tsconfig.node.json` (with the `@/*` path mapping), `index.html` mounting `#root` and loading `src/main.tsx`, and a `.gitignore`. Outcome: `npm install && npm run dev` starts a working dev server.
2. Create `src/styles/global.css` containing exactly `@import "tailwindcss";` as its first line. Outcome: Tailwind v4 utilities available app-wide.
3. Create `src/main.tsx` that imports `./styles/global.css`, creates the router from the generated `src/routeTree.gen.ts`, and renders `RouterProvider` into `#root`. Do not hand-author `src/routeTree.gen.ts` — the router plugin generates it on first dev run. Outcome: app boots with routing wired up.
4. Create `src/routes/__root.tsx` as a minimal shell: a root route rendering an `<Outlet />` inside a full-height wrapper, with no navigation bar, logos, or starter boilerplate. Outcome: no default starter content is ever shown.
5. Create `src/routes/index.tsx` for the `/` route: a full-screen flex container that centers content vertically and horizontally, with a subtle background (soft slate/neutral gradient or tint), an `<h1>` reading "Hello World" using large responsive type (e.g. scaling from small to large breakpoints), tight tracking, and a strong text color, plus one short muted subtitle line beneath it. Outcome: visiting the root URL renders a centered, cleanly styled "Hello World" heading that stays legible and centered on mobile and desktop.
6. Verify: run the dev server, confirm `/` renders the heading with no starter artifacts and no TypeScript or console errors.
