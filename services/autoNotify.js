
module.exports = (price, tp1, tp2) => {
  if (price >= tp1) return '📈 TP1 Hit!';
  if (price >= tp2) return '🚀 TP2 Hit!';
  return '📊 Price in progress...';
};
