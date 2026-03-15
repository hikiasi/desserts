import { test, expect } from '@playwright/test';

test.setTimeout(60000);

test('verify pink theme and rebranded components', async ({ page }) => {
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });

  // Verify Hero
  const h1 = await page.locator('h1').textContent();
  console.log('H1 Text:', h1);

  // Take screenshots of key areas
  await page.screenshot({ path: 'verification/hero_pink.png' });

  // Scroll to catalog
  const catalog = page.locator('#retail-catalog');
  await catalog.scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'verification/catalog_pink.png' });

  // Check footer
  const footer = page.locator('#footer');
  await footer.scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'verification/footer_pink.png' });

  // Verify Admin Login branding
  await page.goto('http://localhost:3001/admin/login', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'verification/admin_login_pink.png' });
});
