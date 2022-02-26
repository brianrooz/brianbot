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

/* file_io dependency setup */
const save_stats = require('./file_io.js').save_stats;
const read_stats = require('./file_io.js').read_stats;

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
            msg.reply("awesome wordle, " + msg.author.username + "!\n\n" +
                "today's wordle: " + stats.number + "\n" +
                "your number of guesses: " + stats.guesses + "\n" +
                "your best guess (by row number): " + stats.luck.best_row + "\n\n" +
                "you went from " + stats.grid[stats.luck.best_row - 1].black + " black tiles, " +
                stats.grid[stats.luck.best_row - 1].yellow + " yellow tiles, and " +
                stats.grid[stats.luck.best_row - 1].green + " green tiles in row " + stats.luck.best_row + " to \n" +
                stats.grid[stats.luck.best_row].black + " black tiles, " +
                stats.grid[stats.luck.best_row].yellow + " yellow tiles, and " +
                stats.grid[stats.luck.best_row].green + " green tiles in row " + stats.luck.best_row + ".\n\n good job today! :)"
                );
        }
    }
});

client.login('');
