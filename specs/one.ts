import {browser, $, $$, element, by, ExpectedConditions as ES} from 'protractor'

describe('First suite', () => {
  it('One should be equal one', async () => {
    await browser.get('')
    await browser.sleep(2000)

    expect(1).toBe(1, '1 should be equal to 1, smth went really wrong')
  })

  // it('isPresent for $ and $$', async () => {
  //   await browser.get('')
  //   await browser.sleep(2000)

  //   const fields = $$('.ng-scope')
  //   console.log(await fields.count()) // 18 elements

  //   // Removing one of elements
  //   const thirdField = fields.get(3)
  //   await browser.executeScript(`
  //     arguments[0].remove()
  //   `, thirdField.getWebElement())


  //   console.log(await fields.count()) // 17 elements
  //   console.log(await fields.isPresent())
  //   console.log(await fields.first().isPresent())

  //   expect(1).toBe(1, '1 should be equal to 1, smth went really wrong')
  // })
})
