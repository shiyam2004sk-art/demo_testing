import {Page} from '@playwright/test';

export async function enterWebApp(page:Page){
    await page.goto('https://www.saucedemo.com/');
}

export async function enterUserName(page:Page){
    await page.locator('//input[@id="user-name"]').fill('standard_user');
}

export async function enterPassword(page:Page){
    const passwordLoc = page.locator('//input[@id="password"]');
    await passwordLoc.fill('secret_sauce');
}


export async function clickLogInBtn(page:Page){
    const logInBtnLoc = page.locator('//input[@id="login-button"]');
    await logInBtnLoc.click();
}