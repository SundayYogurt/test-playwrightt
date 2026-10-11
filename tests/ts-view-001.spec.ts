import { test, expect } from '@playwright/test';

test('check link about This page', async ({ page }) => {
    await page.goto('http://localhost:9999/');
    await page.getByRole('link', { name: 'About' }).click();
    await page.getByRole('heading', { name: 'This is an about page' }).click();
});