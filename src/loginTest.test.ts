import { Builder, Capabilities } from "selenium-webdriver";
import { projectPage } from "./projectPage";

const driver = new Builder().withCapabilities(Capabilities.firefox()).build()

//This test file tests the Login & Logout Functionality.

//Test Case URL: https://dmutah.atlassian.net/browse/MR5DL-35
test("Navigate To Home Page & Login/Logout Successfully", async () => {
    const myTest = new projectPage(driver, "https://juiceshop.com/")
    await myTest.navigate()
    await console.log("Home page loaded successfully.")
    await myTest.getElement(myTest.Login)
    await myTest.click(myTest.Login)
    await myTest.getElement(myTest.EmailField)
    await myTest.setInput(myTest.EmailField, "rossgeller@gmail.com")
    await myTest.getElement(myTest.PasswordField)
    await myTest.setInput(myTest.PasswordField, "Ross241")
    await myTest.getElement(myTest.Login1)
    await myTest.click(myTest.Login1)
    await driver.sleep(10000)
    await console.log("Logged in successfully.")
    await myTest.takeScreenshot(`${__dirname}/Screenshots/LoginSuccess`)
    await driver.sleep(5000)
    await myTest.getElement(myTest.Logout)
    await myTest.click(myTest.Logout)
    await console.log("Logged out successfully.")
})


describe("Login Scenrio's", async () => {
    const myTest = new projectPage(driver, "https://juiceshop.com/account/login")

    //Test Case URL: https://dmutah.atlassian.net/browse/MR5DL-36
    test("Login w/An Unregistered Email", async () => {
        await myTest.navigate()
        await myTest.getElement(myTest.EmailField)
        await myTest.setInput(myTest.EmailField, "ross@gmail.com")
        await myTest.getElement(myTest.PasswordField)
        await myTest.setInput(myTest.PasswordField, "Ross241")
        await myTest.getElement(myTest.Login1)
        await myTest.click(myTest.Login1)
        expect(await myTest.getText(myTest.ErrorResults)).toBe("INCORRECT EMAIL OR PASSWORD.")
        await console.log("Login failed.")
    })

    //Test Case URL: https://dmutah.atlassian.net/browse/MR5DL-37
    test("Login w/An Incorrect Password", async () => {
        await myTest.navigate()
        await myTest.getElement(myTest.EmailField)
        await myTest.setInput(myTest.EmailField, "rossgeller@gmail.com")
        await myTest.getElement(myTest.PasswordField)
        await myTest.setInput(myTest.PasswordField, "Ross24")
        await myTest.getElement(myTest.Login1)
        await myTest.click(myTest.Login1)
        expect(await myTest.getText(myTest.ErrorResults)).toBe("INCORRECT EMAIL OR PASSWORD.")
        await console.log("Login failed.")
        await driver.quit()
    })
})
