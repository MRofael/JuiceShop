import { Builder, Capabilities } from "selenium-webdriver";
import { projectPage } from "./projectPage";

const driver = new Builder().withCapabilities(Capabilities.firefox()).build()

//This test file tests the Cart Functionality.

//Test Case URL: https://dmutah.atlassian.net/browse/MR5DL-38
test("Adding & Removing Items From The Cart", async () => {
    const myTest = new projectPage(driver, "https://juiceshop.com/cart")
    await myTest.navigate()
    await console.log("Cart page loaded successfully.")
    expect(await myTest.getText(myTest.NoItems)).toContain("THERE ARE NO ITEMS IN YOUR CART.")
    await myTest.getElement(myTest.ContinueShopping)
    await myTest.click(myTest.ContinueShopping)
    await myTest.getElement(myTest.PickupAndDelivery)
    await myTest.click(myTest.PickupAndDelivery)
    await myTest.getElement(myTest.CoconutWater)
    await myTest.click(myTest.CoconutWater)
    await myTest.getElement(myTest.CitrusGold)
    await myTest.click(myTest.CitrusGold)
    await myTest.getElement(myTest.CartButton)
    await myTest.click(myTest.CartButton)
    await driver.sleep(5000)
    await myTest.takeScreenshot(`${__dirname}/Screenshots/ShoppingCartWithTwoItems`)
    await driver.sleep(5000)
    //This command is to scroll down to the bottom of the page.
    await driver.executeScript("window.scrollTo(0, document.body.scrollHeight)")
    await driver.sleep(5000)
    await myTest.getElement(myTest.RemoveItem)
    await myTest.click(myTest.RemoveItem)
    expect(await myTest.getText(myTest.CartPage)).not.toContain("COCONUT WATER")
    console.log("Coconut Water has been removed from the cart.")
    await driver.quit()
})