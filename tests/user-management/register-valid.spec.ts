import { test, expect } from '@playwright/test';
import { Locators } from '../../data/Locators';
import * as data from '../../data/Data.json';

test.describe('User Registration and Authentication', () => {
  test('Register new user with valid information', async ({ page }) => {

    await page.setViewportSize({ 
      width: 1265, height: 650 
    });
    // Navigate to the registration page
    await page.goto(data.URL);
    // await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
    // await (page.getByRole('heading', { name: 'Register' })).click();
    //Registration
    await page.locator(".ico-register").click();
    await page.locator(Locators.maleRadio).check();
    await page.locator('input[name="FirstName"]').fill(data.FirstName);
    await page.locator('input[name="LastName"]').fill(data.LastName);
    await page.locator('input[name="Email"]').fill(data.Email);
    await page.locator('input[name="Password"]').fill(data.Password);
    await page.locator('input[name="ConfirmPassword"]').fill(data.ConfirmPassword);
    await page.locator(Locators.RegisterButton).click();

    // Verify the user is redirected to success page
    await expect(page).toHaveURL(/.*registerresult.*/);
    await expect(page.getByText('Your registration completed')).toBeVisible();
//Verify that user able to see the correct email
    await expect(page.getByRole('link', { name: data.Email })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
    await page.getByRole('link', { name: 'Log out' }).click();
  });
});
