/* greeting dependency setup */
const human_greetings = require('./greetings.js').human_greetings;
const robot_noises = require('./greetings.js').robot_noises;
const get_random_number = require('./greetings.js').get_random_number;
const get_random_greeting = require('./greetings.js').get_random_greeting;
const confusion = require('./greetings.js').confusion;

/* discord client setup */
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

function admire_wordle(results) {
    console.log('ooh a wordle!');
}

client.on('ready', () => {
    console.log('brianbot is online: ' + client.user.id);
});

client.on('messageCreate', (msg) => {
    if (msg.content.includes(client.user.id)) {
        var name = msg.author.username;

        if (msg.content.includes('hi')) {
            msg.reply(get_random_greeting(name))
        }
        else {
            msg.reply(confusion(name));
        }
    }
    else if (msg.channel.name.includes("another-channel")) {
        if (/^Wordle [1-9]{3,} [1-6]\W[1-6]/.test(msg.content)) {
            admire_wordle(msg.content);
        }
    }
});

client.login('');
