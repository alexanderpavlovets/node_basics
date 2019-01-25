import { browser, $, $$, element, by, ExpectedConditions as ES } from 'protractor'

describe('First suite', () => {
    it('One is equal to one', wrappCB(async () => {
        await browser.get('')
        await browser.sleep(2000)
        throw new Error('Error thrown')
        expect(1).toBe(1, '1 should be equal to 1, smth went really wrong')
    }))
})


function wrappCB(fn) {

  return async function() {
    try {
      await fn()
    } catch (e) {
      if (e) {
        console.log('Catched error')
      }
    }
  }
}