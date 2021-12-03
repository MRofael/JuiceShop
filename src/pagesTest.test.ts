import { Builder, Capabilities, until } from "selenium-webdriver";
import { projectPage } from "./projectPage";

const driver = new Builder().withCapabilities(Capabilities.firefox()).build()

//This test file tests the Facebook & Instagram buttons.

//Test Case URL: https://dmutah.atlassian.net/browse/MR5DL-41
test("", async () => {
    const myTest = new projectPage(driver, "https://juiceshop.com/")
    await myTest.navigate()
    await myTest.getElement(myTest.Facebook)
    await myTest.click(myTest.Facebook)
    await myTest.getElement(myTest.Instagram)
    await myTest.click(myTest.Instagram)
    let myTabs = []
    myTabs = await driver.getAllWindowHandles()
    await driver.switchTo().window(myTabs[2])
    await driver.sleep(5000)
    let myAttribute = await driver.findElement(myTest.FacebookPage)
    let myId = await myAttribute.getAttribute('id')
    if (myId == "facebook") {
        await console.log("Juice Shop's Facebook Page loaded successfully.")
        await myTest.takeScreenshot(`${__dirname}/Screenshots/JuiceShopFacebookPage`)
        await driver.sleep(5000)
    } else {
        await console.log("Juice Shop's Facebook Page did not load.")
    }
    await driver.close()
    await driver.switchTo().window(myTabs[1])
    await driver.wait(until.elementLocated(myTest.InstagramPage))
    let myAttribute1 = await driver.findElement(myTest.InstagramPage)
    let myID = await myAttribute1.getAttribute('id')
    if (myID == "react-root") {
        await console.log("Juice Shop's Instagram Page loaded successfully.")
        await myTest.takeScreenshot(`${__dirname}/Screenshots/JuiceShopInstagramPage`)
        await driver.sleep(5000)
    } else {
        await console.log("Juice Shop's Instagram Page did not load.")
    }
    await driver.close()
    await driver.switchTo().window(myTabs[0])
    await driver.wait(until.elementLocated(myTest.Instagram))
    await driver.quit()
})