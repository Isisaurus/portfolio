import AxeBuilder from '@axe-core/playwright';
import { projects, publicLinks } from '../src/data';
import { expect, test } from './fixtures';
import { scrollPastTopThreshold, visitLabel } from './helpers';

test.describe('Home accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('document language is English', async ({ page }) => {
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });

  test('exposes expected landmarks', async ({ page }) => {
    await expect(page.getByRole('main')).toHaveAttribute('id', 'main');
    await expect(
      page.getByRole('navigation', { name: 'Page sections' })
    ).toBeVisible();
    await expect(
      page.getByRole('navigation', { name: 'Social links' })
    ).toBeVisible();
    await expect(page.getByRole('banner')).toBeVisible();
  });

  test('heading order is coherent', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
    await expect(page.getByRole('heading', { level: 2 })).toHaveCount(2);

    for (const project of publicLinks) {
      await expect(
        page.getByRole('heading', { level: 3, name: project.title })
      ).toBeVisible();
    }
    for (const project of projects) {
      await expect(
        page.getByRole('heading', { level: 3, name: project.title })
      ).toBeVisible();
    }
  });

  test('skip link moves keyboard focus to main', async ({ page }) => {
    await page.keyboard.press('Tab');
    const skip = page.getByRole('link', { name: 'Skip to main content' });
    await expect(skip).toBeFocused();
    await expect(skip).toHaveAttribute('href', '#main');

    await page.keyboard.press('Enter');
    await expect(page.locator('#main')).toBeFocused();
  });

  test('icon-only controls have accessible names', async ({ page }) => {
    const socials = page.getByRole('navigation', { name: 'Social links' });
    for (const name of ['LinkedIn', 'GitHub', 'WhatsApp'] as const) {
      await expect(socials.getByRole('link', { name })).toBeVisible();
    }

    await expect(
      page.getByRole('main').getByRole('link', { name: 'WhatsApp' })
    ).toBeVisible();

    for (const project of projects) {
      await expect(
        page.getByRole('link', { name: `${project.title} code` })
      ).toBeVisible();
      await expect(
        page.getByRole('link', { name: `${project.title} live preview` })
      ).toBeVisible();
    }

    const linkedProject = publicLinks.find(
      (project) => project.href.length > 0
    );
    expect(linkedProject).toBeTruthy();
    if (!linkedProject) return;

    await expect(
      page.getByRole('link', {
        name: visitLabel(
          linkedProject.title,
          linkedProject.href[0],
          linkedProject.href.length
        ),
      })
    ).toBeVisible();

    await scrollPastTopThreshold(page);
    await expect(
      page.getByRole('button', { name: 'Back to top' })
    ).toBeVisible();
  });

  test('decorative icons are hidden from assistive tech', async ({ page }) => {
    const socials = page.getByRole('navigation', { name: 'Social links' });
    await expect(socials.locator('svg[aria-hidden="true"]')).toHaveCount(3);

    await expect(
      page
        .getByRole('main')
        .getByRole('link', { name: 'WhatsApp' })
        .locator('svg[aria-hidden="true"]')
    ).toHaveCount(1);
  });

  test('external project and social links open in a new tab', async ({
    page,
  }) => {
    const socials = page.getByRole('navigation', { name: 'Social links' });
    for (const name of ['LinkedIn', 'GitHub', 'WhatsApp'] as const) {
      await expect(socials.getByRole('link', { name })).toHaveAttribute(
        'target',
        '_blank'
      );
    }

    for (const project of projects) {
      await expect(
        page.getByRole('link', { name: `${project.title} code` })
      ).toHaveAttribute('target', '_blank');
      await expect(
        page.getByRole('link', { name: `${project.title} live preview` })
      ).toHaveAttribute('target', '_blank');
    }
  });

  test('side project images have non-empty alt text', async ({ page }) => {
    for (const project of projects) {
      const image = page.getByRole('img', {
        name: `${project.title} screenshot`,
      });
      await expect(image).toBeVisible();
      await expect(image).toHaveAttribute('alt', `${project.title} screenshot`);
    }
  });

  test('has no serious or critical axe violations', async ({ page }) => {
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    const seriousOrWorse = results.violations.filter((violation) =>
      ['serious', 'critical'].includes(violation.impact ?? '')
    );

    expect(seriousOrWorse).toEqual([]);
  });
});
