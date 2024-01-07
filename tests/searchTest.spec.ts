import { test, expect } from '@playwright/test';

test('search product with valid query', async ({ page }) => {
  const searchQuery = 'your_valid_search_query';

  await page.goto('https://onlinelibrary.wiley.com/');

  // Enter a valid search query
  await page.fill('input[name="quick-search quickSearchFormContainer"]', searchQuery);
  await page.click('button:has-text("search")');

  // Verify search results
  await page.waitForSelector('.search-results');
  await expect(page.locator('.search-results')).toBeTruthy();
});

test('search product with advanced options', async ({ page }) => {
    // Navigate to the advanced search page
    await page.goto('https://onlinelibrary.wiley.com/search/advanced');
  
    // Fill the advanced search form (replace with actual field values)
    await page.fill('input[name="author"]', 'author_name');
    await page.fill('input[name="title"]', 'book_title');
    // Add more fields as needed...
  
    // Click the search button
    await page.click('button:has-text("Search")');
  
    // Verify search results on the advanced search page
    await page.waitForSelector('.advanced-search-results');
    await expect(page.locator('.advanced-search-results')).toBeTruthy();
  });