import { test, expect } from '@playwright/test';

test('verify registration functionality', async ({ page }) => {
  // Navigate to the registration page
  await page.goto('https://onlinelibrary.wiley.com/action/registration?acdl-redirect=true');

  // Fill in login information
  await page.fill('input[name="login.email"]', 'user@institution.edu');
  await page.fill('input[name="login.email2"]', 'user@institution.edu');
  await page.fill('input[name="login.password"]', 'YourStrongPassword1');
  await page.fill('input[name="login.password2"]', 'YourStrongPassword1');

  // Fill in personal profile information
  await page.fill('input[name="personal.givenNames"]', 'John');
  await page.fill('input[name="personal.surname"]', 'Doe');

  // Select country and area of interest
  await page.selectOption('select[name="taxonomy[0].values"]', 'SRI LANKA');
  await page.selectOption('select[name="taxonomy[1].values"]', 'accounting');

   // Check the "Stay in Touch" checkbox
   await page.check('input[name="checkbox--primary"]');

   // Check the "Terms of Use" checkbox
   await page.check('input[name="checkbox--primary"]');
 
   // Check the "I'm not a robot" checkbox
   await page.check('input[name="recaptcha-checkbox-checkmark"]');
 
   // Click the Register button
   await page.click('button:has-text("Register")');
 
   // Verify successful registration (adjust selector based on actual behavior)
   await page.waitForSelector('.registration-success-message');
   await expect(page.locator('.registration-success-message')).toBeTruthy();
});
