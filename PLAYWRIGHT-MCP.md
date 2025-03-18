# Playwright MCP Server for Mois Analytics

This document explains how to use the Playwright Model Context Protocol (MCP) server for browser automation with the Mois Analytics project.

## What is Playwright MCP?

The Playwright MCP server provides browser automation capabilities using Playwright. It enables interaction with web pages, taking screenshots, and executing JavaScript in a real browser environment.

## Features

- 🌐 Full browser automation capabilities
- 📸 Screenshot capture of entire pages or specific elements
- 🖱️ Comprehensive web interaction (navigation, clicking, form filling)
- 📊 Console log monitoring
- 🔧 JavaScript execution in browser context

## Installation

The Playwright MCP server has been installed as a development dependency in the project. You can find it in the `package.json` file.

## Configuration

The Playwright MCP server is configured in the `playwright-mcp.config.js` file. This file contains settings for:

- Server configuration (port, host)
- Browser configuration (headless mode, viewport size)
- Screenshot configuration (directory, quality)
- Timeout configuration (navigation, action, wait)

## Running the MCP Server

To start the Playwright MCP server, run:

```bash
npm run mcp:playwright
```

This will start the server on the configured port (default: 3333).

## MCP Tools

The Playwright MCP server provides the following tools:

### browser_navigate

Navigate to any URL in the browser.

```json
{
  "url": "https://example.com"
}
```

### browser_screenshot

Capture screenshots of the entire page or specific elements.

```json
{
  "name": "screenshot-name",
  "selector": "#element-id",
  "fullPage": true
}
```

### browser_click

Click elements on the page using CSS selector.

```json
{
  "selector": "#button-id"
}
```

### browser_click_text

Click elements on the page by their text content.

```json
{
  "text": "Click me"
}
```

### browser_hover

Hover over elements on the page using CSS selector.

```json
{
  "selector": "#menu-item"
}
```

### browser_fill

Fill out input fields.

```json
{
  "selector": "#input-field",
  "value": "Hello World"
}
```

### browser_evaluate

Execute JavaScript in the browser console.

```json
{
  "script": "document.title"
}
```

## Example Usage

Check the `e2e/mcp-demo.spec.ts` file for examples of how to use the Playwright MCP server in your tests.

## Resources

- Console Logs: Access browser console output in text format
- Screenshots: Access PNG images of captured screenshots

## Integration with Testing

The Playwright MCP server can be used alongside your existing Playwright tests. It provides additional capabilities for browser automation that can be useful for complex testing scenarios.

## Troubleshooting

If you encounter issues with the Playwright MCP server:

1. Make sure the server is running (`npm run mcp:playwright`)
2. Check the server logs for error messages
3. Verify that the port (default: 3333) is not being used by another application
4. Ensure that you have the correct version of Playwright installed
