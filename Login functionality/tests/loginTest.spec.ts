import { test, expect } from '@playwright/test';

test('valid email and password login', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  // Fill in valid email and password
  await page.fill('input[name="loginEmail"]', 'your_valid_email@example.com');
  await page.fill('input[name="loginPassword"]', 'your_valid_password');

  // Click the login button
  await page.click('button:has-text("Log in")');

  // Expects user to be logged in
  await page.waitForSelector('.user-dashboard');
  await expect(page.locator('.user-dashboard')).toBeTruthy();
});

test('forgot password link', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  // Click the forgot password link
  await page.click('a:has-text("Forgot password?")');

  // Expects to be on the forgot password page
  await page.waitForSelector('h1:has-text("Forgot Password")');
  await expect(page.locator('h1:has-text("Forgot Password")')).toBeTruthy();
});

test('invalid email and password login', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  // Fill in invalid email and password
  await page.fill('input[name="loginEmail"]', 'invalid_email');
  await page.fill('input[name="loginPassword"]', 'invalid_password');

  // Click the login button
  await page.click('button:has-text("Log in")');

  // Expects an error message (adjust the selector based on actual behavior)
  await page.waitForSelector('.error-message');
  await expect(page.locator('.error-message')).toBeTruthy();
});

