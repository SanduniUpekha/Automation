import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Wiley Online Library/);
});

test('1,600+ Journals', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  // Click the 1,600+ Journals link.
  await page.getByRole('link', { name: '1,600+ Journals' }).click();

  // Expects page to have a heading with the name of Browse Publications.
  await expect(page.getByRole('heading', { name: 'Browse Publications - Wiley Online Library' })).toBeVisible();
});

test('250+ Reference Works', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  // Click the 250+ Reference Works link link.
  await page.getByRole('link', { name: '250+ Reference Works' }).click();

  // Expects page to have a heading with the name of Browse Publications.
  await expect(page.getByRole('heading', { name: 'Browse Publications - Wiley Online Library' })).toBeVisible();
});

test('22,000+ Online Books', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  // Click the 22,000+ Online Books link link.
  await page.getByRole('link', { name: '22,000+ Online Books' }).click();

  // Expects page to have a heading with the name of Browse Publications.
  await expect(page.getByRole('heading', { name: 'Browse Publications - Wiley Online Library' })).toBeVisible();
});