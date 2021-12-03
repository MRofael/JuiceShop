import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";

const fs = require("fs")

export class projectPage extends BasePage {

    Login: By = By.xpath('//span[text()="Login"]')
    EmailField: By = By.id("customer_email")
    PasswordField: By = By.id("customer_password")
    Login1: By = By.css('input[tabindex="3"]')
    Logout: By = By.xpath('//a[text()="Logout"]')
    ErrorResults: By = By.xpath('//li[text()="Incorrect email or password."]')
    NoItems: By = By.className("quote")
    ContinueShopping: By = By.className("action_button continue-button add_to_cart")
    PickupAndDelivery: By = By.xpath('//h3/a[text()="Pickup & Delivery"]')
    CoconutWater: By = By.id("product-form-1930608279641")
    CitrusGold: By = By.id("product_form_1930607132761")
    CartButton: By = By.className("header-cart__count cart__count--text")
    RemoveItem: By = By.css(('a[data-line-item-key="2"]'))
    CartPage: By = By.css('html[lang="en"]')
    Search: By = By.css('a[tabindex="0"]')
    SearchBar: By = By.xpath('(//input[@class="input"])[2]')
    SearchIcon: By = By.className("icon is-left submit-search")
    SearchResult: By = By.id('template-search')
    Facebook: By = By.css('a[href="https://www.facebook.com/juiceshopsf/"]')
    FacebookPage: By = By.id("facebook")
    Instagram: By = By.xpath('//a[@href="https://www.instagram.com/juiceshopsf/"]')
    InstagramPage: By = By.id("react-root")
    TermsOfUse: By = By.xpath('//a[text()="Terms Of Use"]')
    PrivacyPolicy: By = By.xpath('(//a[text()="Privacy Policy"])[2]')
    ReturnsPolicy: By = By.xpath('//a[text()="Returns Policy"]')
    OurStory: By = By.xpath('//a[contains(text(), "our story")]')
    OurJuice: By = By.xpath('//a[contains(text(), "our juice")]')
    Visit: By = By.xpath('(//a[@href="/pages/visit"])[3]')
    Careers: By = By.xpath('//a[contains(text(), "careers")]')
    FAQ: By = By.xpath('//a[contains(text(), "FAQ")]')
    ContactUs: By = By.xpath('//a[contains(text(), "Contact")]')
    EventsCatering: By = By.xpath('//a[contains(text(), "Events")]')
    FinalResults: By = By.xpath('//span[text()="WELLNESS EVENTS & CATERING"]')


    constructor(driver, url) {
        super(driver, url)
    }

    async takeScreenshot(filepath: string) {
        fs.writeFile(
            `${filepath}.png`,
            await this.driver.takeScreenshot(),
            "base64",
            (e) => {
                if (e) console.log(e);
                else console.log("Screenshot Saved Successfully.");
            }
        )
    }
}