const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Bot ${client.user.tag} olarak giriş yaptı!`);
});

client.login("MTUzODMyMTgxOTAwNDcwNjg4OA.Gd3jfl.EEcidK_TqzTEAeYO_ZcKX6otQplV43SnQktba0");
