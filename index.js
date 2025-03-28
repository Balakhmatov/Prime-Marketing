const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('8059187698:AAGEqA04mhc2Kr6OQyCx26w5IIX3IC7I_fA');

bot.start((ctx) => {
    // Отправляем сообщение с клавиатурой
    ctx.reply('Привецуцуецет! Это тестовый ботттт.', 
        Markup.keyboard([
            ['📜 Каталог', '🛒 Корзина'], 
            ['📞 Поддержка', 'ℹ️ Инфо']
        ])
        .resize() // Режим автоматического изменения размера клавиш
        .oneTime() // Убирает клавиатуру после нажатия, если нужно
    );
});

// Инлайн-кнопки (сейчас они не должны появляться при /start, только по /menu)
bot.command('menu', (ctx) => {
    ctx.reply('Выберите действие', Markup.inlineKeyboard([
        [Markup.button.callback('Кнопка 1', 'btn1')],
        [Markup.button.callback('Кнопка 2', 'btn2')]
    ]));
});

bot.action('btn1', (ctx) => ctx.reply('Вы нажали кнопку 1'));
bot.action('btn2', (ctx) => ctx.reply('Вы нажали кнопку 2'));

// Запуск бота
bot.launch();
console.log('Бот запущен');
