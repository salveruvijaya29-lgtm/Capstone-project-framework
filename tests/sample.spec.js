import {test, expect} from '@playwright/test';      

test('verify title', async ({ page }) => {  


    await page.goto('https://demoblaze.com/');

        await except(page).toHaveTitle(/STORE/);
        await expect(page).toHaveURL(/demoblaze.com/);
        
});

