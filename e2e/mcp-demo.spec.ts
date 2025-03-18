import { test, expect } from '@playwright/test';

/**
 * This test demonstrates how to use the Playwright MCP server
 * It navigates to the homepage, takes a screenshot, and interacts with elements
 */
test('MCP Server Demo', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('http://localhost:3000');
  
  // Take a screenshot of the entire page
  await page.screenshot({ path: 'playwright-screenshots/homepage.png', fullPage: true });
  
  // Example of using browser_click equivalent
  await page.click('a[href="/services"]');
  
  // Wait for navigation to complete
  await page.waitForURL('**/services');
  
  // Example of using browser_screenshot equivalent for a specific element
  const servicesHeader = await page.locator('h1').first();
  await servicesHeader.screenshot({ path: 'playwright-screenshots/services-header.png' });
  
  // Example of using browser_fill equivalent
  await page.goto('http://localhost:3000/contact');
  await page.fill('input[name="name"]', 'Test User');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('textarea[name="message"]', 'This is a test message from Playwright MCP');
  
  // Example of using browser_evaluate equivalent
  const title = await page.evaluate(() => document.title);
  console.log(`Page title: ${title}`);
  
  // Verify the page title
  expect(title).toContain('Contact');
});

/**
 * This test demonstrates how to use more advanced MCP features
 */
test('Advanced MCP Features', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('http://localhost:3000');
  
  // Example of using browser_hover equivalent
  const servicesLink = page.locator('a[href="/services"]');
  await servicesLink.hover();
  
  // Example of using browser_click_text equivalent
  await page.getByText('Services').click();
  
  // Wait for navigation to complete
  await page.waitForURL('**/services');
  
  // Monitor console logs (similar to console://logs in MCP)
  page.on('console', msg => {
    console.log(`Browser console: ${msg.text()}`);
  });
  
  // Execute JavaScript that produces console output
  await page.evaluate(() => {
    console.log('This is a console log from the browser');
    console.error('This is an error log from the browser');
  });
});
