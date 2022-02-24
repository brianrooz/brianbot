const human_greetings = [
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
];
const robot_noises = [
    "***bleep*** ",
    "***bloop*** ",
    "***beep*** ",
    "***boop*** ",
    "***bleep bloop*** ",
    "***beep boop*** ",
    "***bleep boop*** ",
    "***beep bloop*** ",
]

const get_random_number = (max) => {
    return Math.floor(Math.random() * max);
};

const get_random_greeting = (username) => {
    var random_noise = get_random_number(robot_noises.length);
    var random_greeting = 2 * (get_random_number(human_greetings.length / 2));

    return (robot_noises[random_noise] +
        human_greetings[random_greeting] +
        username +
        human_greetings[random_greeting + 1])
};

const confusion = (username) => {
    var random_noises = [get_random_number(robot_noises.length), get_random_number(robot_noises.length)];

    return ("huh? " +
        robot_noises[random_noises[0]] +
        username +
        ", did you call me " +
        robot_noises[random_noises[1]] +
        "?");
};

exports.human_greetings = human_greetings;
exports.robot_noises = robot_noises;
exports.get_random_number = get_random_number;
exports.get_random_greeting = get_random_greeting;
exports.confusion = confusion;