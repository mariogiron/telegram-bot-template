const express = require('express');
const { Telegraf } = require('telegraf');

require('dotenv').config();

// Crear app express
const app = express();
app.use(express.json());

// Crear bot telegram
const bot = new Telegraf(process.env.BOT_TOKEN);

// Config bot telegram
app.use(bot.webhookCallback('/telegram-bot'));
bot.telegram.setWebhook(`${process.env.BOT_URL}/telegram-bot`);

app.post('/telegram-bot', (req, res) => res.send('Todo OK'));

// COMANDOS

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})