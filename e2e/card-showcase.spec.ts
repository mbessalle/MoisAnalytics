import { test, expect } from '@playwright/test';

test.describe('Card Showcase Page', () => {
  test('should load the showcase page correctly', async ({ page }) => {
    // Navigate to the showcase page
    await page.goto('/card-showcase');
    
    // Check if the title is visible
    await expect(page.locator('h1').filter({ hasText: '3D Card Examples' })).toBeVisible();
    
    // Check if there are 3D cards present (at least 2 card bodies)
    const cardBodies = page.locator('.dark\\:bg-black.dark\\:border-white\\/\\[0\\.2\\]');
    await expect(cardBodies).toHaveCount(2);
  });

  test('should show hover effects when interacting with cards', async ({ page }) => {
    // Navigate to the showcase page
    await page.goto('/card-showcase');
    
    // Get the first card container
    const firstCard = page.locator('.dark\\:bg-black.dark\\:border-white\\/\\[0\\.2\\]').first();
    
    // Get computed style before hover
    const initialTransform = await firstCard.evaluate(
      el => getComputedStyle(el).transform
    );
    
    // Hover over the card
    await firstCard.hover();
    
    // Wait for the animation
    await page.waitForTimeout(300);
    
    // Get computed style after hover
    const hoverTransform = await firstCard.evaluate(
      el => getComputedStyle(el).transform
    );
    
    // The transform should change on hover (note: this is a simple check,
    // in reality the transforms might be similar if the mouse is in the center)
    expect(initialTransform).not.toBe(hoverTransform);
    
    // Check if card items are visible
    const cardItems = firstCard.locator('button');
    await expect(cardItems.first()).toBeVisible();
    await expect(cardItems.first()).toHaveText(/Try Now/);
  });

  test('should have working navigation back to home', async ({ page }) => {
    // Navigate to the showcase page
    await page.goto('/card-showcase');
    
    // Find and click the back to home button
    const backButton = page.locator('a').filter({ hasText: 'Back to Home' });
    await expect(backButton).toBeVisible();
    
    // Click the button and wait for navigation
    await Promise.all([
      page.waitForNavigation(),
      backButton.click()
    ]);
    
    // Verify we're on the home page (checking URL)
    expect(page.url()).toMatch(/\/$/);
  });
});
