import {browser, $, $$, element, by, ExpectedConditions as ES} from 'protractor'

describe('First suite', () => {
  it('One is equal to one', async () => {
    await browser.get('')
    await browser.sleep(2000)

    expect(1).toBe(1, '1 should be equal to 1, smth went really wrong')
  })
})
