import { Builder, Capabilities, Key } from "selenium-webdriver";
import { projectPage } from "./projectPage";

const driver = new Builder().withCapabilities(Capabilities.firefox()).build()

//This test file tests the Search Functionality.

//Test Case URL: https://dmutah.atlassian.net/browse/MR5DL-39
test("Searching For Valid & Invalid Items", async () => {
    const myTest = new projectPage(driver, "https://juiceshop.com/")
    await myTest.navigate()
    await myTest.getElement(myTest.Search)
    await myTest.click(myTest.Search)
    await myTest.getElement(myTest.SearchBar)
    await myTest.setInput(myTest.SearchBar, "Detox Green")
    let textBox = driver.findElement(myTest.SearchBar)
    //This command is to hit Enter like a user would do on his/her keyboard.
    await textBox.sendKeys(Key.ENTER)
    expect(await myTest.getText(myTest.SearchResult)).toContain("DETOX GREEN")
    await myTest.navigate()
    await myTest.getElement(myTest.Search)
    await myTest.click(myTest.Search)
    await myTest.getElement(myTest.SearchBar)
    await myTest.setInput(myTest.SearchBar, "Clothes")
    let textBox1 = driver.findElement(myTest.SearchBar)
    await textBox1.sendKeys(Key.ENTER)
    expect(await myTest.getText(myTest.SearchResult)).toContain("0 RESULTS")
    await driver.quit()
})