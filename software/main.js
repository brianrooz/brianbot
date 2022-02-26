/* greeting dependency setup */
const human_greetings = require('./greetings.js').human_greetings;
const robot_noises = require('./greetings.js').robot_noises;
const get_random_number = require('./greetings.js').get_random_number;
const get_random_greeting = require('./greetings.js').get_random_greeting;
const confusion = require('./greetings.js').confusion;

/* wordle dependency setup */
const wordle_regex = require('./wordle.js').wordle_regex;
const wordle_channel = require('./wordle.js').wordle_channel;
const admire_wordle = require('./wordle.js').admire_wordle;

/* discord client setup */
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

/* event handlers */
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
    else if (msg.channel.name.includes(wordle_channel)) {
        if (wordle_regex.test(msg.content)) {
            stats = admire_wordle(msg);
            console.log(stats);
        }
    }
});

client.login('');
