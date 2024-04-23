'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const priceObjects = prices.map((index) => ({
  price: index,
  salePrice: index / 2,
}));
console.log('Price objects: ', priceObjects);
const formattedPrices = priceObjects.map((index) => index.price.toFixed(2));
console.log('Formatted Prices: ', formattedPrices);
