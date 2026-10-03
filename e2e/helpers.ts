import type { Page } from '@playwright/test';

/** Matches `SHOW_AFTER_VIEWPORTS` in `src/components/ScrollToTop.tsx`. */
export const SCROLL_TO_TOP_VIEWPORTS = 1.1;

export function visitLabel(title: string, href: string, hrefCount: number) {
  if (hrefCount <= 1) {
    return `Visit ${title}`;
  }

  try {
    const host = new URL(href).hostname.replace(/^www\./, '');
    return `Visit ${title} (${host})`;
  } catch {
    return `Visit ${title}`;
  }
}

export async function scrollPastTopThreshold(page: Page) {
  await page.evaluate((factor) => {
    window.scrollTo(0, window.innerHeight * factor + 10);
  }, SCROLL_TO_TOP_VIEWPORTS);
}
