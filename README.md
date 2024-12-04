# Telegram Bot Template with Express.js

This template provides a starting point for creating Telegram bots using Node.js, Express, and the [Telegraf](https://telegraf.js.org/) library. It is designed to simplify the process of setting up a webhook for your Telegram bot.

---

## Features
- **Express.js**: Handles HTTP requests and sets up the server.
- **Telegraf**: A modern and user-friendly library for working with the Telegram Bot API.
- **Environment Variables**: Securely manage your bot token and webhook URL using `.env` files.
- **Easy Configuration**: Quick setup for webhook integration.

---

## Requirements
To use this template, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/telegram-bot-template.git
cd telegram-bot-template
```

### 2. Install Dependencies
Run the following command to install the required dependencies:
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```env
BOT_TOKEN=your-telegram-bot-token
BOT_URL=https://your-server-domain.com
PORT=3000
```
- Replace `your-telegram-bot-token` with the token provided by [BotFather](https://core.telegram.org/bots#botfather).
- Replace `your-server-domain.com` with the domain or IP address of your server.

### 4. Start the Server
Run the server using the following command:
```bash
npm start
```
The server will start and listen on the specified port (default: 3000).

---

## Code Overview

### 1. Dependencies
```javascript
const express = require('express');
const { Telegraf } = require('telegraf');
require('dotenv').config();
```
- `express`: Used to create the HTTP server.
- `telegraf`: Simplifies interactions with the Telegram Bot API.
- `dotenv`: Loads environment variables from the `.env` file.

### 2. Express Server
```javascript
const app = express();
app.use(express.json());
```
The Express server handles incoming HTTP requests.

### 3. Telegram Bot Initialization
```javascript
const bot = new Telegraf(process.env.BOT_TOKEN);
```
Creates a new instance of the bot using the token from the `.env` file.

### 4. Webhook Configuration
```javascript
app.use(bot.webhookCallback('/telegram-bot'));
bot.telegram.setWebhook(`${process.env.BOT_URL}/telegram-bot`);
```
- Sets up a webhook for the bot.
- Links the bot's webhook endpoint to your server.

### 5. Test Endpoint
```javascript
app.post('/telegram-bot', (req, res) => res.send('Todo OK'));
```
This endpoint responds to incoming webhook requests.

### 6. Start Listening
```javascript
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```
Starts the server on the specified port.

---

## Next Steps
1. **Add Bot Commands**: Extend the bot functionality by adding commands in the `COMANDOS` section of the code.
2. **Deploy the Bot**: Use a hosting platform like [Heroku](https://www.heroku.com/), [Render](https://render.com/), or [Vercel](https://vercel.com/) to deploy your bot.
3. **Secure Your Environment**: Avoid committing sensitive information like your bot token to version control.

---

## Resources
- [Telegram Bot API](https://core.telegram.org/bots/api)
- [Telegraf Documentation](https://telegraf.js.org/)
- [Express.js Documentation](https://expressjs.com/)

---

## License
This project is open-source and available under the [MIT License](LICENSE).

---

## Contributions
Feel free to submit issues or pull requests to improve this template.
