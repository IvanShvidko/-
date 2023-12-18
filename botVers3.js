const TelegramBot = require('node-telegram-bot-api');
const token = '6536669687:AAHIpY2xY0DAWo2mpKhyuFKdGbVrkABpRPY';
const bot = new TelegramBot(token, {polling: true});

const mysql = require('mysql2');
const connection = mysql.createConnection(
{
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chatbottests'
});
connection.connect();

console.log('Bot has been started ...')


bot.onText(/\/start/, async (msg) => 
{
  console.log(msg);
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, 'Здравствуй! Меня зовут Окта!\nВсе команды ты можешь посмотреть по ссылке /help');
});

bot.onText(/\/menu/, async (msg) => 
{
  console.log(msg);
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, 'Список всех команд: \n\nОсновные команды:\n/start - Начало диалога;\n/menu - Список всех команд;\n/help - Руководство по написанию команд;\n/site - Ссылка на сайт Октагона;\n/creator - Создатель;\n/qr - Получение QR-Кода сайта;\n\nКоманды связанные с БД items:\n/viewItem - Просмотр всех данных;\n/addItem - Добавление данных;\n/deleteItem - Удаление данных;');
});

bot.onText(/\/help/, async (msg) => 
{
  console.log(msg);
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, 'Чтобы заполнить данными таблицу, нужно ввести команду [/addItem TEXT, TEXT]\nГде TEXT - ваши введённые данные');
  await bot.sendMessage(chatId, 'Чтобы удалить запись из таблицы, нужно ввести команду [/deleteItem ID]\nГде ID - номер записи в таблице');
  await bot.sendMessage(chatId, 'Чтобы получить QR-Код, нужно ввести команду [/qr ссылка]\nГде ссылка - ссылка на любой сайт');
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

bot.onText(/\/qr/, async function(msg) 
{
  console.log(msg);
  const chatId = msg.chat.id;
  const data = msg.text.substring(3).trim();
  const imageqr = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + data;
  await bot.sendMessage(chatId, "[✏️](" + imageqr + ") QR code: " + data, {parse_mode : "Markdown"});
});

bot.onText(/\/viewItem/, (msg) => 
{
  console.log(msg);
  const chatId = msg.chat.id;
  connection.query("SELECT * FROM `items`", (error, results, fields) => 
  {
    bot.sendMessage(chatId, 'Данные таблицы Items: ' + JSON.stringify(results));
  });
});

bot.onText(/\/addItem (.+), (.+)/, (msg, match) => 
{
  console.log(msg);
  const chatId = msg.chat.id;
  const name = match[1];
  const desc = match[2];
  connection.query("INSERT INTO `items` (`Name`, `Desc`) VALUES (?, ?)", [name, desc], (error, results, fields) => 
  {
    bot.sendMessage(chatId, 'Данные успешно добавлены');
  });
});

bot.onText(/\/deleteItem (.+)/, (msg, match) => 
{
  console.log(msg);
  const chatId = msg.chat.id;
  const id = match[1];  
  connection.query("DELETE FROM `items` WHERE ID = ?", [id], (error, results, fields) => 
  {
    if (results.affectedRows > 0) 
    {
      bot.sendMessage(chatId, 'Данные успешно удалены');
    } 
    else 
    {
      bot.sendMessage(chatId, 'Ошибка! Таких данных не существует в базе!');
    }
  });
});