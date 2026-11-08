# Doruk Yeşil — Portfolio

Personal portfolio website built with React 19 and Vite 8. Includes a futuristic animated background, responsive sections, language switching and theme controls. Content covers the hero/introduction, about, skills, experience, projects and contact links.

**Live site:** https://doruk-yesil.github.io/my-portfolio/

The repository also lists a Vercel deployment at https://my-portfolio-mrgp.vercel.app/. GitHub Pages is the public link configured in this review.

## Develop and build

Use Node 24+ and npm, matching the Pages workflow.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Open the local URL printed by Vite. `npm run lint` runs Oxlint. Production output is in `dist/`.

## Source map

- `src/data/content.js`: portfolio copy and project/contact data; update this first for content changes.
- `src/components/`: page sections, navigation, cards and background effects (`BackgroundFX.jsx`).
- `src/context/LanguageContext.jsx` and `ThemeContext.jsx`: language and theme state.
- `src/App.jsx`, `src/App.css`, `src/index.css`: composition and styling.
- `src/assets/hero.png`: hero image; `public/`: favicon and static assets.
- `index.html`: page title, description and Google Fonts links.

Framer Motion drives animations and Lucide supplies UI icons. This is a static frontend; contact actions are links rather than a server-side message submission service. Fonts are fetched from Google Fonts.

## Deployment

`.github/workflows/pages.yml` installs dependencies, builds and deploys `dist/` to GitHub Pages whenever `main` changes. Repository Pages source is GitHub Actions. `vite.config.js` uses relative asset paths (`base: './'`) so assets resolve under `/my-portfolio/` and at the Vercel root.

Build and lint completed during the 8 November 2026 Pages migration; lint reported existing Fast Refresh warnings. The public HTML, JavaScript, CSS and favicon returned HTTP 200 without authentication. This is not a full browser interaction/accessibility test. Package installation also reported four high-severity dependency advisories, which were not remediated by the hosting change.

## Resuming work

Read the content file, contexts and section components before changing the layout. Keep CV/project claims consistent with actual experience. For visual changes, test mobile and desktop, both themes and available languages. Record hosting changes and design decisions here; previous conversation history is not automatically part of this repository.
