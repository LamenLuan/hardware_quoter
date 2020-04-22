const { By, until, Key } = require("selenium-webdriver")
const Vendor = require("./vendor");

module.exports = class Kabum extends Vendor {

  makeSearch(productName) {
    this.searchProducts(productName);
  }

  async searchProducts(productName) {
    await this.driver.get("https://www.kabum.com.br")

    let searchBar = await this.driver.wait(
      until.elementLocated( By.css("input.sprocura") )
    );

    await searchBar.sendKeys(productName, Key.ENTER);
  }
  
}