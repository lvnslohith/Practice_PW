import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/login';
import * as data from '../../data/Data.json';
test.describe('User Management - Filter Functionality', () => {
  test('Filter products by category', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login(data.Email, data.Password);
    // Navigate to the products page
    await page.getByRole('link', { name: 'Books' }).nth(0).click();
    await page.locator("#products-orderby").selectOption("Price: Low to High");

  })
  
})



