# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js 16 App Router site written in TypeScript. Route entry points live under `app/` (`app/page.tsx`, `app/about/page.tsx`, `app/services/page.tsx`). Shared UI belongs in `components/`, reusable hooks in `hooks/`, and utility helpers in `lib/`. Static media is stored in `assets/` with subfolders for `photos/` and `videos/`. `stich-assets/` holds design reference material and should be treated as source inspiration, not runtime code.

## Build, Test, and Development Commands
Use `pnpm` with Node `>=20.9.0`.

- `pnpm install`: install dependencies.
- `pnpm dev`: start the local dev server with webpack.
- `pnpm build`: create a production build.
- `pnpm start`: run the production server after a build.
- `pnpm lint`: run ESLint across the repo.
- `pnpm clean`: remove `.next/` build output.

Before local development, copy `.env.example` to `.env.local` and provide `GEMINI_API_KEY`.

## Coding Style & Naming Conventions
Follow the existing TypeScript and React style: strict typing, functional components, and absolute imports via `@/`. Use PascalCase for components (`Navbar.tsx`), camelCase for hooks and utilities (`use-mobile.ts`, `utils.ts`), and keep route files named `page.tsx` or `layout.tsx` per App Router conventions. The codebase uses 2-space indentation, semicolons, and single quotes. Styling is handled with Tailwind CSS v4 in `app/globals.css`; prefer utility classes over ad hoc CSS files. When dynamic styles (like animation delays) are needed, use Tailwind 4 arbitrary property classes (e.g., `[--delay:1s]`) instead of React inline styles to maintain a clean lint state. For entry reveal animations, wrap server components in the `<FadeIn>` client wrapper to preserve SSR benefits while adding interactivity.

## Testing Guidelines
There is no committed test suite yet. At minimum, run `pnpm lint` and `pnpm build` before opening a PR. When adding tests, place them near the feature or in a dedicated `__tests__/` folder, and use `*.test.ts(x)` naming. Favor component and route-level coverage for new interactive behavior.

## Commit & Pull Request Guidelines
Git history is not available in this checkout, so no repository-specific commit convention can be inferred. Use short, imperative commit subjects such as `Add contact page hero copy` or `Fix mobile nav scroll state`. PRs should include a concise summary, testing notes, linked issues when applicable, and screenshots or recordings for UI changes.

## Security & Configuration Tips
Do not commit secrets. Keep runtime configuration in `.env.local`, using `.env.example` as the template. Review remote image or video sources carefully; prefer local assets in `assets/` when stability matters.
