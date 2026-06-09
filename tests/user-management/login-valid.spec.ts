import { test, expect } from '@playwright/test';
import { Locators } from '../../data/Locators';
import * as data from '../../data/Data.json';

test.describe('User Registration and Authentication', () => {
  test('Login with valid credentials', async ({ page }) => {

    // 1. Navigate to https://demowebshop.tricentis.com/login
    await page.goto(data.URL);
    await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
    await page.getByRole('link', { name: 'Log in' }).click();
    await expect(page.getByText('Email:')).toBeVisible();
    await page.locator(Locators.EmailInput).fill(data.Email);
    await page.locator(Locators.PasswordInput).fill(data.Password);
    await page.locator(Locators.LoginButton).click();
    // expect: The login is successful — verify account options are shown (e.g., 'Log out')
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  });
});
