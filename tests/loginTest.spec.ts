import { test, expect } from '@playwright/test';

test('valid email and password login', async ({ page }) => {
  const loginUrl = 'https://login.education-qa.wiley.com/login';
  const userEmail = 'valid_email@example.com';
  const password = 'valid_password';

  await page.goto(loginUrl);

  // Fill in valid email and password
  await page.fill('input[name="username.login"]', userEmail);
  await page.fill('input[name="password.password"]', password);

  // Click the login button
  await page.click('button[type="button btn submit primary no-margin-bottom accessSubmit"]');

  // Positive test case: Wait for a selector that indicates a successful login
  await page.waitForSelector('.welcome-message');

  // Expects user to be logged in (adjust the selector based on actual behavior)
  await expect(page.locator('.welcome-message')).toBeTruthy();
});

test('forgot password link', async ({ page }) => {
  const loginUrl = 'https://login.education-qa.wiley.com/login';

  await page.goto(loginUrl);

  // Click the forgot password link
  await page.click('a:has-text("Forgot password?")');

  // Expects to be on the forgot password page
  await page.waitForSelector('h1:has-text("Forgot Password")');
  await expect(page.locator('h1:has-text("Forgot Password")')).toBeTruthy();
});

test('invalid email and password login', async ({ page }) => {
  const loginUrl = 'https://login.education-qa.wiley.com/login';
  const invalidEmail = 'invalid_email';
  const invalidPassword = 'invalid_password';

  await page.goto(loginUrl);

  // Fill in invalid email and password
  await page.fill('input[name="email"]', invalidEmail);
  await page.fill('input[name="password"]', invalidPassword);

  // Click the login button
  await page.click('button[type="submit"]');

  // Expects an error message 
  await page.waitForSelector('.error-message');
  await expect(page.locator('.error-message')).toBeTruthy();
});

