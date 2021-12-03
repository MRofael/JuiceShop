import { Builder, Capabilities, until } from "selenium-webdriver";
import { projectPage } from "./projectPage";

const driver = new Builder().withCapabilities(Capabilities.firefox()).build()

//This test file tests the Footer Features.

//Test Case URL: https://dmutah.atlassian.net/browse/MR5DL-40
test("Testing The Footer Features", async () => {
    const myTest = new projectPage(driver, "https://juiceshop.com/")
    await myTest.navigate()
    await myTest.getElement(myTest.TermsOfUse)
    await myTest.click(myTest.TermsOfUse)
    await myTest.getElement(myTest.PrivacyPolicy)
    await myTest.click(myTest.PrivacyPolicy)
    await myTest.getElement(myTest.ReturnsPolicy)
    await myTest.click(myTest.ReturnsPolicy)
    await myTest.getElement(myTest.OurStory)
    await myTest.click(myTest.OurStory)
    await myTest.getElement(myTest.OurJuice)
    await myTest.click(myTest.OurJuice)
    await myTest.getElement(myTest.Visit)
    await myTest.click(myTest.Visit)
    await myTest.getElement(myTest.Careers)
    await myTest.click(myTest.Careers)
    await myTest.getElement(myTest.FAQ)
    await myTest.click(myTest.FAQ)
    await myTest.getElement(myTest.ContactUs)
    await myTest.click(myTest.ContactUs)
    await myTest.getElement(myTest.EventsCatering)
    await myTest.click(myTest.EventsCatering)
    expect(await myTest.getText(myTest.FinalResults)).toBe("WELLNESS EVENTS & CATERING")
    await console.log("All buttons in the footer section work as intended.")
    await myTest.takeScreenshot(`${__dirname}/Screenshots/Events&Catering`)
    await driver.sleep(5000)
    await driver.quit()
})