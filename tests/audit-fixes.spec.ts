import { expect, test } from '@playwright/test';
import { contactFormSchema } from '../lib/contact-schema';

const landingRoutes = [
  'chongqing-wushidui-dianhua', 'chongqing-kaiye-wushi', 'chongqing-shangchang-wushi',
  'chongqing-hunli-wushi', 'chongqing-wulongwushi', 'chongqing-wushi-baojia',
];

test('contact method validates the matching number without rejecting WeChat phone numbers', () => {
  const data = { projectType: '商场开业/庆典', preferredContactMethod: 'phone', name: '测试用户', contact: '!!!!!!' };
  expect(contactFormSchema.safeParse(data).success).toBe(false);
  expect(contactFormSchema.safeParse({ ...data, contact: 'test_wechat' }).success).toBe(false);
  expect(contactFormSchema.safeParse({ ...data, contact: ' 13800138000 ' }).success).toBe(true);
  expect(contactFormSchema.safeParse({ ...data, preferredContactMethod: 'wechat', contact: 'test_wechat' }).success).toBe(true);
  expect(contactFormSchema.safeParse({ ...data, preferredContactMethod: 'wechat', contact: '13800138000' }).success).toBe(true);
});

test('main headings and legal text remain readable without JavaScript', async ({ browser, baseURL }) => {
  test.setTimeout(60_000);
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  for (const route of ['/', '/about', '/services', '/solutions', '/cases', '/media', '/faq', '/privacy', '/terms', '/contact']) {
    await page.goto(`${baseURL}${route}`, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('h1')).toBeVisible();
    expect(await page.locator('h1').evaluate(element => {
      let opacity = 1;
      for (let node: Element | null = element; node; node = node.parentElement) opacity *= Number(getComputedStyle(node).opacity);
      return opacity;
    })).toBe(1);
    if (['/privacy', '/terms'].includes(route)) await expect(page.locator('main section p').first()).toBeVisible();
  }
  await context.close();
});

test('media and every landing page report clipboard denial without claiming success', async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(navigator, 'clipboard', {
    value: { writeText: () => Promise.reject(new Error('Permission denied')) },
  }));
  for (const route of ['/media', ...landingRoutes.map(slug => `/landing/${slug}`)]) {
    await page.goto(route);
    await page.getByRole('button', { name: /^复制/ }).first().click();
    await expect(page.getByRole('alert').filter({ hasText: '复制失败' })).toBeVisible();
    await expect(page.getByRole('button', { name: /已复制/ })).toHaveCount(0);
  }
});

test('contact text fits a 320px screen', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto('/contact');
  const clipped = await page.locator('main h1, main h2, main p, main input, main select').evaluateAll(elements => elements
    .filter(element => {
      const rect = element.getBoundingClientRect();
      return rect.width > 0 && (rect.left < -1 || rect.right > window.innerWidth + 1);
    }).map(element => element.textContent));
  expect(clipped).toEqual([]);
});

test('FAQ structured questions match the displayed questions', async ({ page }) => {
  await page.goto('/faq');
  const schema = await page.locator('script[type="application/ld+json"]').evaluateAll(elements => elements
    .map(element => JSON.parse(element.textContent || '{}')).find(item => item['@type'] === 'FAQPage'));
  expect(schema.mainEntity.map((item: { name: string }) => item.name)).toEqual(await page.locator('main summary > span:first-child').allTextContents());
});

test('analytics needs opt-in and stops loading after opt-out', async ({ page }) => {
  const requests: string[] = [];
  await page.route('https://hm.baidu.com/**', route => {
    requests.push(route.request().url());
    return route.fulfill({ status: 200, contentType: 'application/javascript', body: '' });
  });
  await page.goto('/privacy');
  await expect(page.getByRole('button', { name: '允许访问统计' })).toBeVisible();
  await page.goto('/about');
  expect(requests).toEqual([]);
  await page.goto('/privacy');
  await page.getByRole('button', { name: '允许访问统计' }).click();
  await expect.poll(() => requests.length).toBe(1);
  await page.getByRole('button', { name: '关闭访问统计' }).click();
  await expect(page.getByRole('button', { name: '允许访问统计' })).toBeVisible();
  await page.goto('/about');
  expect(requests).toHaveLength(1);
  expect(await page.evaluate(() => localStorage.getItem('wushi-analytics'))).toBe('denied');
});

test('successful media and landing copies show confirmation', async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(navigator, 'clipboard', {
    value: { writeText: () => Promise.resolve() },
  }));
  for (const route of ['/media', '/landing/chongqing-kaiye-wushi']) {
    await page.goto(route);
    await page.getByRole('button', { name: /^复制/ }).first().click();
    await expect(page.getByRole('button', { name: /已复制/ }).first()).toBeVisible();
    await expect(page.getByRole('alert').filter({ hasText: '复制失败' })).toHaveCount(0);
  }
});

test('a browser without Clipboard API offers manual copying', async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(navigator, 'clipboard', { value: undefined }));
  await page.goto('/media');
  await page.getByRole('button', { name: /^复制/ }).first().click();
  await expect(page.getByRole('alert').filter({ hasText: '复制失败' })).toContainText('手动复制');
  await expect(page.getByRole('button', { name: /已复制/ })).toHaveCount(0);
});
