import { expect, test } from '@playwright/test';
import { getAllGuidePosts, getGuidePostBySlug } from '../lib/guide';

test('published guides have valid metadata and reject traversal', () => {
  expect(getAllGuidePosts().length).toBeGreaterThan(0);
  expect(getGuidePostBySlug('../guide/how-to-choose-team')).toBeNull();
  expect(getGuidePostBySlug('missing-guide')).toBeNull();
});

test('share metadata preserves images, locale and canonical', async ({ page }) => {
  for (const route of ['/', '/services', '/contact', '/landing/chongqing-kaiye-wushi', '/guide/chongqing-lion-dance-price']) {
    await page.goto(route);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://www.cqwushi.com${route === '/' ? '' : route}`);
    await expect(page.locator('meta[property="og:image"]').first()).toHaveAttribute('content', /^https:\/\/www\.cqwushi\.com\//);
    await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute('content', 'zh_CN');
  }
  await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute('content', /red-lion-dance-high-jong-stage.webp$/);
});

test('compact menu is scrollable and Escape returns focus', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 390, height: 568 });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: '打开菜单' });
  await toggle.click();
  const panel = page.locator('#mobile-navigation');
  const contact = panel.getByRole('link', { name: '联系我们', exact: true });
  await contact.scrollIntoViewIfNeeded();
  await expect(contact).toBeInViewport();
  await page.screenshot({ path: testInfo.outputPath('mobile-menu.png') });
  await contact.focus();
  await page.keyboard.press('Escape');
  await expect(toggle).toBeFocused();
  await expect(panel).toHaveCount(0);
  await toggle.click();
  await page.setViewportSize({ width: 1400, height: 900 });
  await expect(panel).toHaveCount(0);
  await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden');
});

test('clipboard denial shows a usable fallback and never claims success', async ({ page }) => {
  await page.setViewportSize({ width: 1400, height: 900 });
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: () => Promise.reject(new Error('Permission denied')) },
    });
  });
  await page.goto('/');
  await page.getByRole('button', { name: '联系我们', exact: true }).click();
  await page.getByRole('button', { name: '复制微信号', exact: true }).click();
  await expect(page.getByRole('alert').filter({ hasText: '复制失败' })).toBeVisible();
  await expect(page.getByRole('button', { name: '已复制微信号' })).toHaveCount(0);
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: '联系我们', exact: true })).toBeFocused();
});

test('guide links stay visible without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:3000/guide');
  const article = page.locator('article').first();
  await expect(article).toBeVisible();
  await expect(article).toHaveCSS('opacity', '1');
  await article.locator('a').click();
  await expect(page.locator('h1')).toBeVisible();
  await context.close();
});

test('unknown landing keys return 404', async ({ request }) => {
  for (const slug of ['constructor', 'toString', 'missing-page']) {
    expect((await request.get(`/landing/${slug}`)).status()).toBe(404);
  }
});


test('article tables fit mobile and scroll within their own region', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/guide/chongqing-lion-dance-price');
  const table = page.getByRole('region', { name: '文章表格，可横向滚动' }).first();
  await table.scrollIntoViewIfNeeded();
  await expect(table).toHaveCSS('overflow-x', 'auto');
  expect(await table.evaluate((element) => element.scrollWidth > element.clientWidth)).toBe(true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath('article-table.png') });
});
