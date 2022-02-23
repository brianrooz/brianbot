/* setup */
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

/* greetings list */
var robot_noises = [
    "***bleep*** ",
    "***bloop*** ",
    "***beep*** ",
    "***boop*** ",
    "***bleep bloop*** ",
    "***beep boop*** ",
    "***bleep boop*** ",
    "***beep bloop*** ",
]
var human_greetings = [
    "hello ",
    ". :slight_smile:",
    "howdy ",
    "! :cowboy:",
    "greetings ",
    ". :alien:",
    "hi ",
    ". :blush:",
    "what's up, ",
    "? :sunglasses:",
    "how goes it, ",
    "? :smirk:",
    "how's it going, ",
    "? :smile:",
    "what up what upppp ",
    "? :sunglasses:",
    "what's good, ",
    "? :grin:",
    "hey ",
    ". :wink:",
    "yoooo! it's ",
    "! :star_struck:",
    "AHHH! ROBOT NOISES!! ",
    "! :robot::zap::x:",
]

function get_random_number(max) {
    return Math.floor(Math.random() * max);
}

function get_random_greeting(username) {
    var random_noise = get_random_number(robot_noises.length);
    var random_greeting = 2 * (get_random_number(human_greetings.length) / 2) - 1;

    return (robot_noises[random_noise] +
        human_greetings[random_greeting] +
        username +
        human_greetings[random_greeting + 1])
}

client.on('ready', () => {
    console.log('brianbot is online: ' + client.user.id);
});

client.on('messageCreate', (msg) => {
    if ((msg.content.includes('hi')) && (msg.content.includes(client.user.id))) {
        msg.reply(get_random_greeting(msg.author.username))
    }
});

client.login('');
