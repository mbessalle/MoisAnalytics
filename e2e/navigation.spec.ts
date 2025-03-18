import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to all main pages', async ({ page }) => {
    // Start from the home page
    await page.goto('/');
    
    // Verify we're on the home page
    await expect(page).toHaveTitle(/Mois Analytics/);
    
    // Navigate to Services page
    await page.click('text=Services');
    await expect(page).toHaveURL(/.*\/services/);
    await expect(page.locator('h1')).toContainText('Our Services');
    
    // Navigate to Contact page
    await page.click('text=Contact');
    await expect(page).toHaveURL(/.*\/contact/);
    await expect(page.locator('h1')).toContainText('Get in Touch');
    
    // Navigate to Login page
    await page.click('text=Client Login');
    await expect(page).toHaveURL(/.*\/login/);
    await expect(page.locator('form')).toBeVisible();
    
    // Navigate back to home
    await page.click('text=Mois Analytics');
    await expect(page).toHaveURL('/');
  });
});

test.describe('Contact Form', () => {
  test('should show validation errors for empty form submission', async ({ page }) => {
    // Go to contact page
    await page.goto('/contact');
    
    // Try to submit the form without filling it
    await page.click('button:has-text("Send Message")');
    
    // Check for validation messages
    await expect(page.locator('text=Name must be at least 2 characters')).toBeVisible();
    await expect(page.locator('text=Invalid email address')).toBeVisible();
    await expect(page.locator('text=Message must be at least 10 characters')).toBeVisible();
  });
  
  test('should allow form submission with valid data', async ({ page }) => {
    // Go to contact page
    await page.goto('/contact');
    
    // Fill the form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="company"]', 'Test Company');
    await page.fill('input[name="phone"]', '1234567890');
    await page.selectOption('select[name="service"]', 'data-analysis');
    await page.fill('textarea[name="message"]', 'This is a test message for the contact form submission.');
    
    // Submit the form
    await page.click('button:has-text("Send Message")');
    
    // Check for success message
    await expect(page.locator('text=Contact form submitted successfully')).toBeVisible();
  });
});
