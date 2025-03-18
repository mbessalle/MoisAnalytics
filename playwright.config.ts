import { defineConfig, devices } from '@playwright/test';

// Import the MCP configuration if it exists
let mcpConfig = {};
try {
  mcpConfig = require('./playwright-mcp.config.js');
} catch (e) {
  console.log('MCP config not found, using default configuration');
}

export default defineConfig({
  testDir: './e2e',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    // Add screenshot configuration from MCP config if available
    screenshot: mcpConfig.screenshots ? {
      fullPage: mcpConfig.screenshots.fullPage || false,
      mode: 'only-on-failure',
    } : 'only-on-failure',
    // Add viewport configuration from MCP config if available
    viewport: mcpConfig.browser?.defaultViewport || { width: 1280, height: 720 },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
    // Add a project specifically for MCP testing
    {
      name: 'mcp',
      use: { 
        ...devices['Desktop Chrome'],
        launchOptions: {
          headless: mcpConfig.browser?.headless !== undefined ? mcpConfig.browser.headless : false,
          slowMo: mcpConfig.browser?.slowMo || 50,
        },
      },
    },
  ],
  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});
