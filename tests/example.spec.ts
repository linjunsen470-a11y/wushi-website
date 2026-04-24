import { test, expect } from '@playwright/test';

test.describe('重庆鑫龙堂网站基础 E2E', () => {
  test('首页应正常加载并展示品牌主标题', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/重庆鑫龙堂舞狮/);
    await expect(page.getByRole('heading', { name: /西南地区专业舞狮/ })).toBeVisible();
    // 页面上有多个“联系我们”链接（导航栏和页脚），指定导航栏中的链接
    await expect(page.getByRole('navigation').getByRole('link', { name: '联系我们' })).toBeVisible();
  });

  test('导航到联系页面，并展示表单基本字段', async ({ page }) => {
    await page.goto('/');
    // 指定点击导航栏中的“联系我们”
    await page.getByRole('navigation').getByRole('link', { name: '联系我们' }).click();
    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByRole('heading', { name: /获取专属您的/ })).toBeVisible();
    await expect(page.getByLabel('您的称呼')).toBeVisible();
    await expect(page.getByLabel('联系电话 / 微信')).toBeVisible();
    await expect(page.getByRole('button', { name: /提交需求并开始沟通/ })).toBeVisible();
  });

  test('联系页表单必填验证应展示错误提示', async ({ page }) => {
    await page.goto('/contact');
    await page.getByRole('button', { name: /提交需求并开始沟通/ }).click();
    await expect(page.locator('text=请选择活动类型')).toBeVisible();
    await expect(page.locator('text=请输入您的称呼')).toBeVisible();
    await expect(page.locator('text=请输入手机号或微信号')).toBeVisible();
  });
});
