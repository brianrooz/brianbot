/* setup */
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on('ready', () => {
    console.log('brianbot is online!');
});

client.on('messageCreate', (msg) => {
    console.log(msg.member.user.tag + ' said hello to brianbot!');
    if (msg.content === '!hello') {
        msg.reply('hi ' + msg.member.user.tag + '! :)');
    }
});

client.login('');
