const { Builder} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

module.exports = class Vendor {
  constructor() {
    this.driver = new Builder().forBrowser("chrome").setChromeOptions(
      new chrome.Options().addArguments("--disable-notifications")
    ).build();
  }
  async searchProducts() {}
}