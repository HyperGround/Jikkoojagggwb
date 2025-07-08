/*CMD
  command: XAUUSD
  help: handle pair XAUUSD
  keyboard:
  aliases:
CMD*/

let timeframes = ["1m", "5m", "15m", "1h", "4h", "1d", "1w"];
let tf_keyboard = [];
for (let tf of timeframes) {
  tf_keyboard.push([tf]);
}

User.setProperty("pair", command, "string");
Bot.sendInlineKeyboard(tf_keyboard, "📊 تایمفرەیمەکە هەڵبژێرە:");
