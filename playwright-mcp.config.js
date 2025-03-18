/**
 * Configuration file for Playwright MCP Server
 * This file configures the Playwright MCP server for browser automation
 */

module.exports = {
  // Server configuration
  server: {
    port: 3333, // Port to run the MCP server on
    host: 'localhost', // Host to bind the server to
  },
  
  // Browser configuration
  browser: {
    headless: false, // Set to true for headless mode, false to see the browser
    defaultViewport: { width: 1280, height: 720 }, // Default viewport size
    slowMo: 50, // Slows down Playwright operations by the specified amount of milliseconds
  },
  
  // Screenshot configuration
  screenshots: {
    directory: './playwright-screenshots', // Directory to save screenshots
    quality: 80, // JPEG quality (0-100)
    fullPage: false, // Whether to take full page screenshots by default
  },
  
  // Timeout configuration (in milliseconds)
  timeouts: {
    navigation: 30000, // Navigation timeout
    action: 10000, // Action timeout (click, type, etc.)
    waitFor: 5000, // Wait for element timeout
  },
};
