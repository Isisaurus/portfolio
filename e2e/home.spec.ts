import { projects, publicLinks } from '../src/data';
import { expect, test } from './fixtures';
import { visitLabel } from './helpers';

test.describe('Home content', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero identity', async ({ page }) => {
    await expect(
      page.getByRole('heading', { level: 1, name: 'Diana Vitanyi' })
    ).toBeVisible();
    await expect(
      page.getByText('Full-Stack Developer · React · TypeScript')
    ).toBeVisible();
  });

  test('renders section headings', async ({ page }) => {
    await expect(
      page.getByRole('heading', { level: 2, name: 'Selected work' })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { level: 2, name: 'Side projects' })
    ).toBeVisible();
  });

  test('selected work list matches data', async ({ page }) => {
    for (const project of publicLinks) {
      await expect(
        page.getByRole('heading', { level: 3, name: project.title })
      ).toBeVisible();

      if (project.href.length === 0) {
        await expect(
          page.getByRole('link', {
            name: new RegExp(`^Visit ${project.title}`),
          })
        ).toHaveCount(0);
        continue;
      }

      for (const href of project.href) {
        const link = page.getByRole('link', {
          name: visitLabel(project.title, href, project.href.length),
        });
        await expect(link).toBeVisible();
        await expect(link).toHaveAttribute('href', href);
        await expect(link).toHaveAttribute('target', '_blank');
      }
    }
  });

  test('side projects expose code, preview, and image alt', async ({
    page,
  }) => {
    for (const project of projects) {
      await expect(
        page.getByRole('heading', { level: 3, name: project.title })
      ).toBeVisible();

      const code = page.getByRole('link', { name: `${project.title} code` });
      await expect(code).toHaveAttribute('href', project.code);
      await expect(code).toHaveAttribute('target', '_blank');

      const preview = page.getByRole('link', {
        name: `${project.title} live preview`,
      });
      await expect(preview).toHaveAttribute('href', project.preview);
      await expect(preview).toHaveAttribute('target', '_blank');

      await expect(
        page.getByRole('img', { name: `${project.title} screenshot` })
      ).toBeVisible();
    }
  });

  test('contact CTAs point to email and WhatsApp', async ({ page }) => {
    const email = page.getByRole('link', { name: /Send me an email/i });
    await expect(email).toHaveAttribute(
      'href',
      /^mailto:dianavitanyi@gmail\.com/
    );

    const whatsapp = page
      .getByRole('main')
      .getByRole('link', { name: 'WhatsApp' });
    await expect(whatsapp).toHaveAttribute(
      'href',
      'https://wa.me/qr/4N7ZUA26FB6VN1'
    );
  });

  test('social links open the expected profiles', async ({ page }) => {
    const socials = page.getByRole('navigation', { name: 'Social links' });

    await expect(
      socials.getByRole('link', { name: 'LinkedIn' })
    ).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/diana-vitanyi-49211a15a/'
    );
    await expect(socials.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/Isisaurus'
    );
    await expect(
      socials.getByRole('link', { name: 'WhatsApp' })
    ).toHaveAttribute('href', 'https://wa.me/qr/4N7ZUA26FB6VN1');

    for (const name of ['LinkedIn', 'GitHub', 'WhatsApp'] as const) {
      await expect(socials.getByRole('link', { name })).toHaveAttribute(
        'target',
        '_blank'
      );
    }
  });
});
