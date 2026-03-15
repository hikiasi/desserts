import { test, expect } from '@playwright/test';

test('verify pink theme and rebranded components', async ({ page }) => {
  await page.goto('http://localhost:3001');

  // Verify Hero
  const h1 = await page.locator('h1').textContent();
  console.log('H1 Text:', h1);

  // Take screenshots of key areas
  await page.screenshot({ path: 'verification/hero_pink.png' });

  // Scroll to catalog and check price color
  await page.locator('#retail-catalog').scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'verification/catalog_pink.png' });

  // Check footer
  await page.locator('#footer').scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'verification/footer_pink.png' });

  // Verify Admin Login branding
  await page.goto('http://localhost:3001/admin/login');
  await page.screenshot({ path: 'verification/admin_login_pink.png' });
});
