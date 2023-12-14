const TelegramBot = require('node-telegram-bot-api');
const token = '6536669687:AAHIpY2xY0DAWo2mpKhyuFKdGbVrkABpRPY';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Привет, Октагон!');
});
