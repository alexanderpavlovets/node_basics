import { browser, Config } from 'protractor'

const conf: Config = {
  capabilities: {
    browserName: 'chrome',
    maxInstances: 1
    },
  allScriptsTimeout: 30 * 1000,
  specs: ['specs/one.ts'],
  baseUrl: 'http://www.protractortest.org/testapp/ng1/',

  directConnect: true,
  // seleniumAddress: 'http://localhost:4444/wd/hub', // local run

  // Needed to make async/await work. Disables control flow.
  SELENIUM_PROMISE_MANAGER: false,

  onPrepare: async () => {
    // await browser.waitForAngularEnabled(false)
    await browser.manage().window().maximize()
  }
}

exports.config = conf
