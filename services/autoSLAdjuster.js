
module.exports = (marketVolatility) => {
  return marketVolatility > 0.7 ? 'SL moved closer' : 'SL unchanged';
};
