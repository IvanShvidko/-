const TelegramBot = require('node-telegram-bot-api');
const token = '6536669687:AAHIpY2xY0DAWo2mpKhyuFKdGbVrkABpRPY';
const bot = new TelegramBot(token, {polling: true});

bot.setMyCommands([
    {command: '/help', description: 'Список всех команд'},
    {command: '/start', description: 'Начало диалога'},
    {command: '/site', description: 'Ссылка на сайт Октагона'},
    {command: '/creator', description: 'Создатель'},
])

bot.on
('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === '/help') 
    {
        return bot.sendMessage(chatId, 'Список всех команд: \n/start - Начало диалога;\n/help - Список команд;\n/site - Ссылка на сайт Октагона;\n/creator - Создатель;');
    }
    if (text === '/start') 
    {
        return bot.sendMessage(chatId, 'Здравствуй! Меня зовут Окта!\nВсе команды ты можешь посмотреть по ссылке /help');
    }
    if (text === '/site') 
    {
        return bot.sendMessage(chatId, 'Ссылка на сайт Октагона: https://students.forus.ru/');
    }
    if (text === '/creator') 
    {
        return bot.sendMessage(chatId, 'Моего создателя зовут:\nШвидко Иван Анатольевич\n@ivanshvidko');
    }
    return bot.sendMessage(chatId, 'Я не знаю такой команды, попробуй еще раз!');
})