import { test, expect } from '@playwright/test';
import { enterWebApp, enterUserName, enterPassword, clickLogInBtn } from '../pages/login';

test('filter products by Price (low to high)', async ({ page }) => {
  // Login first
  await enterWebApp(page);
  await enterUserName(page);
  await enterPassword(page);
  await clickLogInBtn(page);

  // Wait for inventory page to load
  await page.waitForLoadState('networkidle');

  // Locate the filter dropdown
  const filterDropdown = page.locator('.product_sort_container');

  // Select "Price (low to high)" option
  await filterDropdown.selectOption('lohi');

  // Verify that the dropdown shows "Price (low to high)" selected
  const selectedValue = await filterDropdown.inputValue();
  expect(selectedValue).toBe('lohi');

  // Optional: check that the first product price is indeed the lowest
  const prices = await page.locator('.inventory_item_price').allTextContents();
  const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));
  const sortedPrices = [...numericPrices].sort((a, b) => a - b);

  expect(numericPrices).toEqual(sortedPrices);
});
