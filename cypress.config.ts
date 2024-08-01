import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    supportFile: 'cypress/support/e2e.ts',
    fixturesFolder: 'cypress/fixtures',
    specPattern: 'cypress/integration/**/*.ts',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    video: false,
    setupNodeEvents(on, config) {
      require('./cypress/plugins/index.js')(on, config);

      return config;
    },
    env: {
      codeCoverage: {
        exclude: ['cypress/**/*.*'],
      },
    },
  },
});
