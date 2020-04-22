const Kabum = require("./kabum");

async function search(productName) {
  let kabum = new Kabum();

  await kabum.searchProducts(productName);
}

search("Processador Ryzen 5 1600");