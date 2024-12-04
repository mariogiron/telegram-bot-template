// Import necessary modules
const express = require('express');
const { Telegraf } = require('telegraf');

// Load environment variables
require('dotenv').config();

// Initialize Express app and middleware
const app = express();
app.use(express.json());

// Initialize Telegram bot with token from environment variables
const bot = new Telegraf(process.env.BOT_TOKEN);

// Set up bot webhook
app.use(bot.webhookCallback('/telegram-bot'));
bot.telegram.setWebhook(`${process.env.BOT_URL}/telegram-bot`);

// Define a basic endpoint for testing
app.post('/telegram-bot', (req, res) => res.send('All OK'));

// Add your bot commands below in this section
// Example: bot.command('start', ctx => ctx.reply('Welcome!'));

// Start the server on the specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
