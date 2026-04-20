# Portfolio Structure Refactoring & Modernization

**Overview**: The goal is to refactor the current vanilla HTML/CSS/JS portfolio into a modern, maintainable Single Page Application (SPA). Since the project requires dedicated folders, a single entry point (`index.html`), and will be hosted on GitHub Pages, we will migrate it to **Vite + React**. Vite will bundle our assets and provide a static export perfectly suited for GitHub Pages.

## User Review Required
> [!IMPORTANT]
> The plan proposes migrating from Vanilla HTML/CSS to React + Vite. This will require rewriting the current `index.html` into React components. Please let me know if you prefer keeping it Vanilla JS with Vite, or if you approve the React path!

## Project Type
**WEB** (Assigned to `frontend-specialist`)

## Success Criteria
- [ ] Codebase is organized into dedicated source folders (`src/components`, `src/assets`, etc.).
- [ ] Project builds successfully via `npm run build` into a `dist/` folder.
- [ ] The build output functions perfectly on GitHub Pages (configured `base` path).
- [ ] Original styling and features are maintained or improved.

## Tech Stack
- **Framework**: React 18 (Component-based SPA, satisfies "keep an index").
- **Bundler**: Vite (Extremely fast, built-in asset handling, outputs static files for GitHub Pages).
- **Styling**: Standard CSS (migrating your current styles) or Tailwind CSS.
- **Assets**: Vite's `public/` or `src/assets/` directories.

## Proposed File Structure
```text
/
├── public/                 # Static assets (Favicons, direct-copy files)
│   └── fontawesome/        # Move fontawesome dependencies here
├── src/                    # Source code
│   ├── assets/             # Images and design assets (moved from /imgs)
│   ├── components/         # Reusable UI parts (Header, Footer, Projects, etc.)
│   ├── styles/             # Global CSS and modular sheets
│   ├── App.jsx             # Main application component
│   └── main.jsx            # React mounting point
├── index.html              # The single index file required
├── vite.config.js          # Vite configuration for correct Github Pages paths
└── package.json            # Dependencies and scripts (dev, build, preview)
```

## Task Breakdown

- `[ ]` **Task 1: Project Initialization**
  - **Agent**: `frontend-specialist`
  - **Action**: Run Vite creation script, define `package.json`, install dependencies (React, Vite).
  - **Verify**: `package.json` exists and `npm install` runs successfully.

- `[ ]` **Task 2: Asset Migration**
  - **Agent**: `frontend-specialist`
  - **Action**: Move `imgs/` to `src/assets/imgs/`. Move `fontawesome-free-6.5.1-web/` to `public/fontawesome/`.
  - **Verify**: Files are correctly placed in the new structure and old folders are deleted.

- `[ ]` **Task 3: Component Refactoring**
  - **Agent**: `frontend-specialist`
  - **Action**: Break down the existing `index.html` into React components (e.g., `<Hero>`, `<Projects>`, `<About>`). Place them in `src/components/`. Add logic from `script.js` into appropriate `useEffect` hooks or handlers.
  - **Verify**: Components render the exact layout previously available in vanilla HTML.

- `[ ]` **Task 4: Style Migration**
  - **Agent**: `frontend-specialist`
  - **Action**: Move `styles.css` and `teste.css` into `src/styles/`. Import them globally into `main.jsx`.
  - **Verify**: Portfolio looks visually identical to the original version.

- `[ ]` **Task 5: GitHub Pages Configuration**
  - **Agent**: `devops-engineer` / `frontend-specialist`
  - **Action**: Create/Update `vite.config.js` to include the `base: '/Portf-lio/'` so assets load correctly on GitHub Pages. 
  - **Verify**: `npm run build` generates a `dist/` folder with correct paths.

## Phase X: Verification
- [ ] Linting & Build check: `npm run build` succeeds without errors.
- [ ] Run dev server `npm run dev` and perform manual visual layout check.
- [ ] Verify there are no missing asset 404 blockages (images/fonts load).
- [ ] **✅ PHASE X COMPLETE** (Pending implementation)
