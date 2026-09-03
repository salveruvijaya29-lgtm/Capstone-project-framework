import {test, expect} from '@playwright/test';

test('demo test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://demoblaze.com/');
});