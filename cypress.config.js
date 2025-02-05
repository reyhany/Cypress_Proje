const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      return config
    },
    baseUrl: 'https://www.radiofrance.fr',
    defaultCommandTimeout: 10000,
    viewportWidth: 1280,
    viewportHeight: 720,
    chromeWebSecurity: false,
    retries: {
      runMode: 2,
      openMode: 1
    },
    video: true,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
    env: {
      allure: true,
      allureReuseAfterSpec: true,
      allureResultsPath: "allure-results"
    }
  },
})
