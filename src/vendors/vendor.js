const { Builder} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

module.exports = class Vendor {
  
  constructor() {
    this.driver = new Builder().forBrowser("chrome").setChromeOptions(
      new chrome.Options().addArguments("--disable-notifications")
    ).build();
  }

  /**
   * Main function, returns the product if found.
   */
  makeSearch() {}

  /**
   * Browse to the site and searches for the product name.
   * @param {*} productName Name of the product.
   */
  async searchProducts(productName) {}

}