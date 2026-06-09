import { test, expect } from '@playwright/test';


export const Locators = { 
     "maleRadio" : ('input[name="Gender"][value="M"]'),
     "RegisterButton" : ('input[type="submit"][value="Register"]'),
     "EmailInput" : ('input[name="Email"]'),
     "PasswordInput" : ('input[name="Password"]'),
     "LoginButton" : ('input.button-1.login-button')

}
