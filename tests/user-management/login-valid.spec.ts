import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import * as data from '../../data/Data.json';

test.describe('User Registration and Authentication', () => {
  test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login(data.Email, data.Password);
    await expect(loginPage.isLoginSuccessful()).resolves.toBe(true);

   });
   
});
