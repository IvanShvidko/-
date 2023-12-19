const TelegramBot = require('node-telegram-bot-api');
const token = '6717020983:AAFWRu9_CZs3E2Xd0xp52xVbS-vLWpELUp8';
const bot = new TelegramBot(token, {polling: true});

console.log('Bot has been started ...')

bot.onText(/\/start/, async (msg) => 
{
  console.log(msg);
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, `Привет, ${msg.from.first_name}! Я бот помощник компании Форус:]\nВся информация тут: /menu`);
});

bot.onText(/\/menu/, async (msg) => 
{
  console.log(msg);
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, 'Список всех команд:\n/start - Начало диалога;\n/menu - Список всех команд;\n/site_forus - Главный сайт Форус;\n/information - Информация о компании;\n/events - Мероприятия;\n/job_openings - Доступные вакансии;\n/contacts - Контакты;\n/octagon - Сайт Октагона;');
});

bot.onText(/\/site_forus/, async (msg) => 
{
  console.log(msg);
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, 'Главный сайт Форус: https://www.forus.ru/?utm');
});

bot.onText(/\/information/, async (msg) => 
{
  console.log(msg);
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, 'Информация о компании: https://www.forus.ru/about/');
});

bot.onText(/\/contacts/, async (msg) => 
{
  console.log(msg);
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, 'Контакты: https://www.forus.ru/about/kontakty/');    
});

bot.onText(/\/events/, async (msg) => 
{
  console.log(msg);
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, 'Мероприятия: https://www.forus.ru/about/meropriyatiya/');    
});

bot.onText(/\/job_openings/, async (msg) =>             
{
  console.log(msg);
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, 'Доступные вакансии: https://people.forus.ru/');    
});

bot.onText(/\/octagon/, async (msg) => 
{
  console.log(msg);
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, 'Сайт Октагона: https://students.forus.ru/');
});
