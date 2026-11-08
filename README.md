# Doruk Yeşil — Portfolio

## Portfolio selection rules — user decision, 8 November 2026

Documenting a GitHub repository does **not** authorize adding it to this website. Keep the existing selected-project list curated. Do not automatically import repositories, README summaries or private projects into `src/data/content.js`.

- Do not add `future-roadmap`, `Trading-AI`, `polarity-dash` or `ContentCreatorSimulator` to the portfolio.
- Do not add `my-portfolio` as a project card for the site itself.
- Keep `Orbit_Dasher`, `Hamurhane` and `kesinti-radari` out of the portfolio's selected projects unless the user explicitly changes this decision.
- `orbit-escape` is a possible **future** addition, not approved for publication now. Ask for a separate explicit decision before adding it, publishing screenshots or exposing its private repository.
- The README improvements across repositories were for preserving development context, not a portfolio expansion. Other documented repositories likewise need an explicit selection decision before new cards are added.

These rules only govern portfolio publication; keep useful development documentation in the other repositories.

### Approved academic and development additions — 8 November 2026

The user subsequently authorized checking the remaining academic/development repositories and adding missing portfolio work. The selection now has 10 bilingual cards: Bibliocast, forest-fire detection (CS419), drone-network architecture (CS408), e-commerce (CS308), 2048 agent (CS415), CLARITY (CS445), How U Doin (CS310), tourism/flight data work (CS414), one combined internship-demo card linking Grid Comparison / Quasar / Blockly, and the StajProj mini-banking prototype. The exclusions above still apply.

Sources and limits for future edits:

- Bibliocast's root README is a React template; the checked-in `summary-of-frontend.txt` provides the actual frontend inventory. The card describes that frontend and links to the private organization repo with an access-required label. Do not imply that visitors gain access or expose private source files in this portfolio.
- CS308, CS419 and CS415 README files describe their actual projects. CS419 names Doruk's contribution as feature engineering, segmentation implementation and evaluation; its evaluation uses dNBR-derived proxy masks. CS415 is a PyTorch REINFORCE agent, not a verified score/achievement claim. Conflicting CS308 team counts were removed from the portfolio.
- CS310 README describes React Native and Java but has placeholder setup and speculative Firebase wording. Its `build.gradle` confirms Java 17, Spring Boot, MongoDB, Spring Security and JWT. The card uses these confirmed backend technologies rather than guessing Firebase.
- CS414 README contains no useful project description. The tree and `BaşarScraping/data.ipynb` confirm Pandas/NetworkX, GraphML and API-based price enrichment; the card describes data preparation, not a completed optimization result. Do not reproduce notebook credentials or raw authenticated requests.
- CLARITY README says approximately 0.74 macro F1, but the notebook's corresponding 308-example output says weighted F1 0.7389 and macro F1 about 0.65. The portfolio deliberately omits a numerical headline rather than confusing these metrics. Experiments were not retrained.
- The three internship demo READMEs and source files were checked. Blockly's non-JSON output display remains unfinished; the portfolio does not claim all generators work. Grid feature parity and performance ranking are not established.
- StajProj README and source documentation describe its banking prototype; its private repo link is marked access-required. It is not labeled as a production banking service or assigned to a specific employer.
- CS408: the old ChatGPT chat **Rapor Değerlendirmesi** (18 May 2025, chat ID `6829bb72-757c-8004-8347-d15e6815c0df`) discusses the sensor/drone/server report, TCP/socket/threading/queues, battery behavior and GUI screenshots. That is historical context, not independently recovered source code or measured hardware evidence. No repository was located. Keep the existing architecture card without a fabricated source link or new performance claims.
- User correction: the Turkish-sentiment entry and CLARITY referred to the same CS445 project. Remove the misleading Turkish-sentiment card in both languages and keep only the repository-backed CLARITY card. Do not restore a second CS445 entry or merge unrelated BERTurk/GPT-2 sentiment claims into CLARITY.

These notes preserve the evidence gathered in this review, not all earlier project conversations or attachments. The original CS408 report/attachments, private local files and chat-only decisions may still need separate backup before their source projects are deleted.

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

### Mini-bank provenance correction

The user clarified that StajProj was a voluntary personal practice exercise during a later job, not part of the NovaFinz internship. Display it separately as Bonus Work / Personal Practice. Do not combine it with the Grid Comparison, Quasar and Blockly internship card or describe it as an employer-assigned deliverable. The user discussed possible deletion but did not authorize deleting the repository.
