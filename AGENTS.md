<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Wonderlust

Single-package Next.js 16 App Router app (no monorepo, no workspaces). `npm` is the package manager (`package-lock.json`; do not commit yarn/pnpm/bun lockfiles).

## Commands

- `npm run dev` — dev server on <http://localhost:3000> (Turbopack, React HMR)
- `npm run build` — production build (Turbopack) **plus** TypeScript typecheck; this is the way to catch type errors
- `npm run lint` — ESLint 9 flat config (`eslint-config-next` core-web-vitals + TS rules)
- `npx tsc --noEmit` — typecheck alone (there is no `typecheck` script)

There are no tests configured. Do not invent test commands; verify changes with `npm run lint` and `npm run build`.

## Toolchain quirks

- **React Compiler is enabled** (`reactCompiler: true` in `next.config.ts`, via `babel-plugin-react-compiler`). Do not write manual `useMemo`/`useCallback`; the compiler memoizes automatically. Keep the Rules of React strictly (no conditional hooks/mutations) — violations break compilation, not just optimization.
- **Tailwind v4, CSS-first**: there is no `tailwind.config`; theme tokens and design constants live in `src/app/globals.css` (`@theme inline`, `@custom-variant dark`). Wiring comes from `@tailwindcss/turbopack` in `next.config.ts`.
- **Dark mode is class-based**: `dark:` applies only under a `.dark` ancestor (`@custom-variant dark` in `globals.css`).

## shadcn/ui (Base UI variant)

- `components.json` uses style **`base-nova`**: primitives come from `@base-ui/react`, **not** Radix/park-ui APIs — don't copy Radix-based snippets into `src/components/ui`.
- Generated files live in `src/components/ui/*` and are mostly self-contained: they re-export `cn` from the `cn` package via `src/lib/utils.ts`. Prefer adding/editing these via `npx shadcn add ...` rather than hand-authoring.
- Import aliases (`tsconfig.json`): `@/*` → `./src/*`, plus `@/components`, `@/lib`, `@/hooks` wired in `components.json`.
- Icons come from `lucide-react` (already a dependency — `components.json` `iconLibrary`), not inline SVGs or other icon sets.
