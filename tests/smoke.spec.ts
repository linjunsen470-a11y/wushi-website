import { expect, test, type Page } from '@playwright/test';

const routes = [
  '/',
  '/about',
  '/services',
  '/solutions',
  '/cases',
  '/media',
  '/faq',
  '/contact',
  '/privacy',
  '/terms',
];

const primaryRoutes = ['/about', '/services', '/solutions', '/cases', '/media', '/faq', '/contact'];

async function expectHealthyPage(path: string, page: Page) {
  const response = await page.goto(path, { waitUntil: 'domcontentloaded' });

  expect(response, `${path} should return an HTTP response`).not.toBeNull();
  expect(response!.status(), `${path} should not return an error status`).toBeLessThan(400);
  await expect(page.locator('main')).toBeVisible();
  await expect(page).toHaveTitle(/.+/);
  await expect(page.locator('body')).not.toContainText(
    /Application error|Internal Server Error|This page could not be found|Unhandled Runtime Error/i
  );
}

test.describe('site smoke', () => {
  for (const path of routes) {
    test(`renders ${path}`, async ({ page }) => {
      await expectHealthyPage(path, page);
    });
  }

  test('desktop navigation exposes and follows primary routes', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'desktop-chromium', 'Desktop navigation is covered only on desktop Chromium.');

    await expectHealthyPage('/', page);

    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();

    for (const href of primaryRoutes) {
      await expect(nav.locator(`a[href="${href}"]`).first(), `Expected desktop nav link ${href}`).toBeVisible();
    }

    await nav.locator('a[href="/services"]').first().click();
    await expect(page).toHaveURL(/\/services$/);
    await expect(page.locator('main')).toBeVisible();
  });

  test('mobile contact shortcut navigates to contact', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'mobile-chromium', 'Mobile shortcut is covered only on mobile Chromium.');

    await expectHealthyPage('/', page);

    const contactShortcut = page.locator('body > div a[href="/contact"]').first();
    await expect(contactShortcut).toBeVisible();
    await contactShortcut.click();
    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.locator('form')).toBeVisible();
  });

  test('contact form renders required controls without submitting to the backend', async ({ page }) => {
    await expectHealthyPage('/contact', page);

    const form = page.locator('form');
    await expect(form).toBeVisible();

    await expect(form.locator('#project-type')).toBeVisible();
    await expect(form.locator('#preferred-contact')).toBeVisible();
    await expect(form.locator('#user-name')).toBeVisible();
    await expect(form.locator('#user-contact')).toBeVisible();
    await expect(form.locator('#event-message')).toBeVisible();
    await expect(form.locator('button[type="submit"]')).toBeEnabled();

    await form.locator('#user-name').fill('Smoke Test');
    await form.locator('#user-contact').fill('18983662830');
    await form.locator('#event-message').fill('Playwright smoke test only. Do not submit.');

    await expect(form.locator('#user-name')).toHaveValue('Smoke Test');
    await expect(form.locator('#user-contact')).toHaveValue('18983662830');
    await expect(form.locator('#event-message')).toHaveValue('Playwright smoke test only. Do not submit.');
  });
});
