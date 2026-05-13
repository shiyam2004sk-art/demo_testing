import { test, expect } from '@playwright/test';
import { enterWebApp, enterUserName, enterPassword, clickLogInBtn } from '../pages/login';
import {  clickShort} from '../pages/home';


test('login test', async ({ page }) => {
  await enterWebApp(page);
  await enterUserName(page);
  await enterPassword(page);
  await clickLogInBtn(page);
});

test('home test', async ({ page }) => {
  await enterWebApp(page);
  await enterUserName(page);
  await enterPassword(page);
  await clickLogInBtn(page);
  await clickShort(page);
  await page.waitForTimeout(3000)
});





