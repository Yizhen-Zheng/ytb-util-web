# Repository Guidelines

## Project Structure & Module Organization

The Vite-based frontend lives in `src`, with feature logic split across `components`, `pages`, `hooks`, and `lib`. `AppLayout.tsx` wires global layout and routes, while entry code sits in `main.tsx`. Test fixtures and mock payloads belong in `src/__tests__/mockup-data`, and shared styling resides in `src/styles` alongside Tailwind utilities imported via `@/styles/index.css`. Root-level configs (`vite.config.ts`, `tailwind.config.ts`, `tsconfig*.json`, `components.json`) define build, styling, and path aliases; avoid duplicating settings inside feature folders.

## Build, Test, and Development Commands

Run `npm install` once per clone to install dependencies from `package.json`. Use `npm run dev` for a hot-reloading local server, and `npm run preview` to verify the production bundle locally after a build. Ship-ready assets come from `npm run build`, which compiles TypeScript (`tsc -b`) before running `vite build`; fix lint issues before building by executing `npm run lint` or `npm run lint -- --fix` for safe auto-fixes.

## Coding Style & Naming Conventions

All TypeScript and React files must pass the shared ESLint config (`eslint.config.js`), so favor modern ECMAScript features and strict typing. Stick to 2-space indentation, double quotes, and meaningful JSX prop ordering to match existing files. Use PascalCase for components, camelCase for utilities and hooks (`useX`), and leverage the `@/*` alias declared in `tsconfig.json` instead of long relative imports.

## Testing Guidelines

Automated tests are not yet wired into `package.json`; when adding coverage, use Vitest or another Vite-friendly runner and expose a matching `npm test` script. Store fixtures or snapshot data under `src/__tests__/mockup-data` and name new test files `*.test.ts(x)` or `*.spec.ts(x)` to ease discovery. For now, validate UI flows manually in `npm run dev`, and document any gaps or manual steps in the related pull request.

## Commit & Pull Request Guidelines

Follow the existing Git history by writing concise, imperative commit subjects (e.g., `Add timeline panel`) and include scoped bodies when context is non-obvious. Each pull request should summarize the change, reference tracking issues, and call out UI-affecting updates with screenshots or recordings. Confirm lint/build status before requesting review, and tag reviewers familiar with the affected feature or shared module.

## Configuration & Environment

Environment-specific values should live in `.env` files consumed by Vite; never commit secrets. Tailwind design tokens belong in `tailwind.config.ts`, while component registry updates are managed via `components.json`. When adjusting tooling, capture the rationale in the pull request so downstream agents understand the impact on local setups.
