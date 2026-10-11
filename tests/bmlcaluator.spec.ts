import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.calculator.net/bmi-calculator.html');
    await page.locator('#cage').click();
    await page.locator('#metricheightweight').click();
    await page.locator('#ckg').click();
    await page.getByRole('heading', { name: 'Result Save this calculation' }).click();
    await page.getByRole('button', { name: 'Calculate' }).click();
});