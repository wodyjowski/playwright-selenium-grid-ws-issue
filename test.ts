import { test, expect } from '@playwright/test';

test('Sample test', async ({ page }) => {
  await page.goto('https://www.selenium.dev/');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByPlaceholder('Search docs').fill('test123');
  await page.getByPlaceholder('Search docs').press('Enter');
});