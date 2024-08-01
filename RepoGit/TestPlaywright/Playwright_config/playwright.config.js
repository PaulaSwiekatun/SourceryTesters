// playwright.config.js
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    testDir: './tests', // A catalogue containing tests // Katalog, w którym znajdują się testy
    timeout: 30000,      //  Waiting time for tests // Czas oczekiwania na testy
    use: {
      baseURL: 'https://www.saucedemo.com', // Primary URL for tests // Podstawowy URL dla testów
      browserName: 'chromium',             // // Possible values: 'chromium', 'firefox', 'webkit' //Możliwe wartości: 'chromium', 'firefox', 'webkit'
    },
    reporter: [['list'], ['json', { outputFile: 'results/test-results.json' }]],
  };
  
  module.exports = config;
  