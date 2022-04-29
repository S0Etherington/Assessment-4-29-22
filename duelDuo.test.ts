
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('draw button should give the id "choices"', async () => {
    await driver.findElement(By.id('draw'))
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)

    await driver.sleep(1000)
})

test('add to duo should give id "player-duo"', async () => {
    await driver.findElement(By.xpath('(//div[contains(@class="bot-btn"])[1]'))
    const duo = await driver.findElement(By.id('player-duo'))
    const displayed = await duo.isDisplayed()
    expect(displayed).toBe(true)

    await driver.sleep(1000)
})