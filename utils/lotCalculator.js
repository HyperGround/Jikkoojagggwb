
module.exports = (balance, riskPercent, stopLossPips) => {
  const riskAmount = balance * (riskPercent / 100);
  const lotSize = riskAmount / stopLossPips;
  return lotSize.toFixed(2);
};
