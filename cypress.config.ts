export default {
  e2e: {
    baseUrl: "http://localhost:5173/lotr",
    viewportWidth: 1280,
    viewportHeight: 720,
    specPatter: {
      fixturesFolder: "cypress/fixtures",
      integrationFolder: "cypress/integration",
      screenshotsFolder: "cypress/screenshots",
      videosFolder: "cypress/videos",
      supportFile: "cypress/support/index.js",
    },
    defaultCommandTimeout: 5000,
  },
};
