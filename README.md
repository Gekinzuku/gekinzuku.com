# GEKINZUKU // SYSTEM//OS — Svelte Edition

The original static portfolio (HTML + CSS + a sprinkle of JS) rebuilt as a
**Svelte 4 + Vite** single page app. Same vaporwave / retro-hacker theme,
same neon palette, same CRT scanlines — now with a real router and components.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (defaults to http://localhost:5173).

## Build

```bash
npm run build      # production bundle -> dist/
npm run preview    # serve the production build locally
```

## Routes

A tiny dependency-free hash router lives in `src/lib/router.js`:

| Hash                | View              |
| ------------------- | ----------------- |
| `#/`                | Home              |
| `#/projects`        | Project directory |
| `#/projects/<id>`   | Project detail    |

## Project structure

```
gekinzuku-svelte/
├── index.html
├── package.json
├── svelte.config.js
├── vite.config.js
├── jsconfig.json
└── src/
    ├── main.js            # app entry
    ├── app.css            # global theme (was style.css)
    ├── App.svelte         # layout + router outlet
    └── lib/
        ├── router.js      # hash router store
        ├── projects.js    # project registry (data)
        ├── Scanlines.svelte
        ├── Header.svelte
        ├── Footer.svelte
        ├── Home.svelte
        ├── Projects.svelte
        └── ProjectDetail.svelte
```

## Adding a project

Open `src/lib/projects.js` and push a new object:

```js
{
  id: 'my-project',
  title: 'MY_PROJECT',
  summary: 'One line shown in the directory grid.',
  category: 'WEB APP / SVELTE + VITE',
  description: [
    'First paragraph...',
    'Second paragraph...'
  ],
  stack: ['Svelte', 'Vite'],
  demo: 'https://example.com',
  source: 'https://github.com/you/repo'
}
```

It automatically shows up in the `PROJECT_DIRECTORY` grid and gets its own
page at `#/projects/my-project`.

> The repo ships with one `sample-project` entry so you can see the flow.
> Delete it from the array to restore the original
> `> NO PROJECTS DEPLOYED YET_` empty state.

## Theming

All colors and fonts are CSS custom properties at the top of `src/app.css`:

```css
:root {
  --bg-color: #0d0221;
  --neon-pink: #ff007f;
  --neon-cyan: #00f3ff;
  --neon-purple: #9d00ff;
  --neon-yellow: #ffe600;
}
```

Change them once and the whole site follows.
