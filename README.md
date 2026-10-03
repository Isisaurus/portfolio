# Diana Vitanyi — Portfolio

Personal portfolio site, showcasing selected client work and personal side projects.

**Live:** [https://diana-vitanyi.vercel.app/](https://diana-vitanyi.vercel.app/)

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Deployed on [Vercel](https://vercel.com)

## Getting started

```bash
npm install
npx playwright install chromium
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Edit `src/app/page.tsx` and related components under `src/`; the page updates as you save.

`npm install` also installs Husky git hooks via the `prepare` script.

## Scripts

| Command               | Description                     |
| --------------------- | ------------------------------- |
| `npm run dev`         | Start the dev server            |
| `npm run build`       | Create a production build       |
| `npm run start`       | Run the production build        |
| `npm run lint`        | Run ESLint                      |
| `npm run format`      | Format with Prettier            |
| `npm run test:e2e`    | Run Playwright end-to-end tests |
| `npm run test:e2e:ui` | Open Playwright UI mode         |

## Quality gates

- **pre-commit** (Husky): Prettier + ESLint on staged files via lint-staged
- **pre-push** (Husky): full-repo lint + Playwright e2e suite
- **GitHub Actions**: lint, build, and e2e on PRs and pushes to `main`/`dev`
- **Vercel**: production build and preview deploys (unchanged)

First-time e2e setup needs Chromium: `npx playwright install chromium`. Locally, e2e reuses a running `next` server when available; otherwise it builds and starts one.
