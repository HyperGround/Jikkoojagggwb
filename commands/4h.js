/*CMD
  command: 4h
  help: handle timeframe 4h
  keyboard:
  aliases:
CMD*/

let pair = User.getProperty("pair");
Bot.sendMessage("📡 شیکاری scalping بۆ " + pair + " لە تایم " + command + " بە زووی دێت...");

let entry = 2000.00;
let sl = entry - 0.0020;
let tp = entry + (entry - sl) * 3;

Bot.sendMessage(
  "✅ Entry: " + entry.toFixed(4) +
  "\n📉 SL: " + sl.toFixed(4) +
  "\n📈 TP: " + tp.toFixed(4) +
  "\n🪙 " + pair
);
