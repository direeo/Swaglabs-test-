const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'https://www.saucedemo.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 30000,
    requestTimeout: 30000,
    responseTimeout: 30000,
    pageLoadTimeout: 120000,
    video: false,
    screenshotOnRunFailure: true,
    experimentalRunAllSpecs: true,
    // Add retry configuration
    retries: {
      runMode: 2,
      openMode: 1
    },
    // Ignore uncaught exceptions
    uncaughtExceptionHandler: false,
    // Ignore network errors
    chromeWebSecurity: false,
    // Add better error handling
    experimentalModifyObstructiveThirdPartyCode: true
  },
});