import { expect, test } from './fixtures';
import { scrollPastTopThreshold } from './helpers';

test.describe('Home functional', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('in-page nav jumps to sections', async ({ page }) => {
    const nav = page.getByRole('navigation', { name: 'Page sections' });

    await nav.getByRole('link', { name: 'Selected work' }).click();
    await expect(page.locator('#selected-work')).toBeInViewport();
    await expect(page).toHaveURL(/#selected-work$/);

    await nav.getByRole('link', { name: 'Side projects' }).click();
    await expect(page.locator('#side-projects')).toBeInViewport();
    await expect(page).toHaveURL(/#side-projects$/);
  });

  test('ScrollToTop is hidden at the top of the page', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Back to top' })).toHaveCount(
      0
    );
  });

  test('ScrollToTop appears after the scroll threshold', async ({ page }) => {
    await scrollPastTopThreshold(page);

    await expect(
      page.getByRole('button', { name: 'Back to top' })
    ).toBeVisible();
  });

  test('ScrollToTop returns to the top of the page', async ({ page }) => {
    await scrollPastTopThreshold(page);

    const backToTop = page.getByRole('button', { name: 'Back to top' });
    await expect(backToTop).toBeVisible();
    await backToTop.click();

    await expect
      .poll(async () => page.evaluate(() => window.scrollY))
      .toBeLessThan(5);
    await expect(backToTop).toHaveCount(0);
  });

  test('ScrollToTop hides when scrolling back up manually', async ({
    page,
  }) => {
    await scrollPastTopThreshold(page);

    const backToTop = page.getByRole('button', { name: 'Back to top' });
    await expect(backToTop).toBeVisible();

    await page.evaluate(() => window.scrollTo(0, 0));

    await expect(backToTop).toHaveCount(0);
  });
});
