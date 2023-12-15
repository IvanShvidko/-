const TelegramBot = require('node-telegram-bot-api');
const token = '6536669687:AAHIpY2xY0DAWo2mpKhyuFKdGbVrkABpRPY';
const bot = new TelegramBot(token, {polling: true});

bot.setMyCommands([
    {command: '/help', description: 'Список всех команд'},
    {command: '/start', description: 'Начало диалога'},
    {command: '/site', description: 'Ссылка на сайт Октагона'},
    {command: '/creator', description: 'Создатель'},
])

bot.onText(/\/help/, async (msg) => 
{
  console.log(msg);
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, 'Список всех команд: \n/start - Начало диалога;\n/help - Список команд;\n/site - Ссылка на сайт Октагона;\n/creator - Создатель;');
});

bot.onText(/\/start/, async (msg) => 
{
  console.log(msg);
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, 'Здравствуй! Меня зовут Окта!\nВсе команды ты можешь посмотреть по ссылке /help');
});

bot.onText(/\/site/, async (msg) => 
{
  console.log(msg);
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, 'Ссылка на сайт Октагона: https://students.forus.ru/');
});

bot.onText(/\/creator/, async (msg) => 
{
  console.log(msg);
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, 'Моего создателя зовут:\nШвидко Иван Анатольевич\n@ivanshvidko');
});