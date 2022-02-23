/* setup */
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on('ready', () => {
    console.log('brianbot is online: ' + client.user.id);
});

client.on('messageCreate', (msg) => {
    console.log(msg)
    if ((msg.content.includes('hi')) && (msg.content.includes(client.user.id))) {
        msg.reply('*bleep bloop* hi ' + msg.author.username + '! :)');
    }
    else if (!(msg.content.includes('hi')) && (msg.content.includes(client.user.id))) {
        msg.reply('hm? did someone call me *bloop*?')
    }
});

client.login('');
