/*CMD
  command: /start
  help: scalping signal starter
  keyboard: 
  aliases:
CMD*/

let pairs = ["XAUUSD", "EURUSD", "ETHUSD", "JPYUSD", "BTCUSD"];
let keyboard = [];
for (let i = 0; i < pairs.length; i += 2) {
  let row = [];
  if (pairs[i]) row.push(pairs[i]);
  if (pairs[i + 1]) row.push(pairs[i + 1]);
  keyboard.push(row);
}
keyboard.push(["ETC."]);

Bot.sendInlineKeyboard(keyboard, "🔍 کام جوت دراو هەڵبژێرە؟");
