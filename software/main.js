/* setup */
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on('message', (msg) => {
    console.log('brianbot is online!');
    if (msg.content === '!hello') {
        msg.reply('hi brian!');
    }
});


client.login('OTQ1NTQ1Njc3OTQ0MDI5MjQ0.YhRuCQ.QwTqLmWUWDRuvEGhkGhLr7gC7Tk');