const Kabum = require("./vendors/kabum");

async function search(productName) {
  
  let kabum = new Kabum();

  await kabum.makeSearch(productName);
  
}

search("Processador Ryzen 5 1600");