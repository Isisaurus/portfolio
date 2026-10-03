# Diana Vitanyi — Portfolio

Personal portfolio site, showcasing selected client work and personal side projects.

**Live:** [https://diana-vitanyi.vercel.app/](https://diana-vitanyi.vercel.app/)

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- [Playwright](https://playwright.dev) + [@axe-core/playwright](https://www.npmjs.com/package/@axe-core/playwright) for e2e and accessibility checks
- Deployed on [Vercel](https://vercel.com)

## Requirements

- Node.js `>=22.12.0 <23` (see `package.json` `engines`)

## Getting started

```bash
npm install
npx playwright install chromium
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edit `src/app/page.tsx` and components under `src/`; the page updates as you save.

`npm install` installs Husky git hooks via the `prepare` script.

## Scripts

| Command               | Description                     |
| --------------------- | ------------------------------- |
| `npm run dev`         | Start the Next.js dev server    |
| `npm run build`       | Create a production build       |
| `npm run start`       | Serve the production build      |
| `npm run lint`        | Run ESLint                      |
| `npm run format`      | Format the repo with Prettier   |
| `npm run test:e2e`    | Run Playwright end-to-end tests |
| `npm run test:e2e:ui` | Open Playwright UI mode         |

## Testing

Specs live in `e2e/` and use Playwright’s Testing Library–style queries (`getByRole`, `getByText`, …):

| File                      | Coverage                                               |
| ------------------------- | ------------------------------------------------------ |
| `home.spec.ts`            | Hero, sections, project data, contact and social links |
| `home.functional.spec.ts` | In-page nav, ScrollToTop show / hide / click           |
| `home.a11y.spec.ts`       | Landmarks, skip link, heading order, axe WCAG 2 A/AA   |

```bash
npm run test:e2e
```

Locally, tests reuse a server already running on [http://localhost:3000](http://localhost:3000) when available; otherwise Playwright builds and starts the app. Prefer `localhost` over `127.0.0.1` so Next.js client components hydrate correctly in development.

## Quality gates

| Gate               | What runs                                               |
| ------------------ | ------------------------------------------------------- |
| **pre-commit**     | Prettier + ESLint on staged files (lint-staged)         |
| **pre-push**       | Full-repo lint + Playwright e2e                         |
| **GitHub Actions** | Lint, production build, and e2e on PRs / `main` / `dev` |
| **Vercel**         | Production build and preview deploys                    |

Playwright is intentionally not part of the Vercel build step.
