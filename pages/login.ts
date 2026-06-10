import {Page} from '@playwright/test';
import * as data from '../data/Data.json';
export class LoginPage {
    constructor(public page: Page) {
    }
    async navigateToLoginPage() {
        await this.page.goto('https://demowebshop.tricentis.com/login');
    }
    async login(email: string, password: string) {
        await this.page.getByRole('link', { name: 'Log in' }).click();
        await this.page.locator('#Email').fill(data.Email);
        await this.page.locator('#Password').fill(data.Password);
        await this.page.locator('input[value="Log in"]').click();
    }
    async isLoginSuccessful() {
        return await this.page.getByRole('link', { name: 'Log out' }).isVisible();
    } 
}