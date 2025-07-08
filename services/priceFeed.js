
const fetch = require('node-fetch');
module.exports = async function getPrice(pair) {
  const response = await fetch(`https://api.example.com/price/${pair}`);
  const data = await response.json();
  return data.price;
};
