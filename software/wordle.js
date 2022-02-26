
const wordle_regex = /^Wordle [0-9]{3,} [1-6]\W6/;
const wordle_channel = "another-channel";

const green_square = '\u{1F7E9}';
const yellow_square = '\u{1F7E8}';
const black_square = '\u{2B1B}';

const black_byte = 11035;
const color_highbyte = 55357;
const green_lowbyte = 57321;
const yellow_lowbyte = 57320;

function wordle_stats(parameters) {
    var parameters = parameters.split(' ');
    var count = parameters.length;

    function constructor() {
        for (let i = 0; i < count; i++) {
            this[parameters[i]] = arguments[i];
        }
    }
    return constructor; 
}

function admire_wordle(results) {

    /* initialize the statistics struct */
    var statistics = wordle_stats("grid guesses");
    var rows = [
        { 'black': 0, 'yellow': 0, 'green': 0 },
        { 'black': 0, 'yellow': 0, 'green': 0 },
        { 'black': 0, 'yellow': 0, 'green': 0 },
        { 'black': 0, 'yellow': 0, 'green': 0 },
        { 'black': 0, 'yellow': 0, 'green': 0 },
        { 'black': 0, 'yellow': 0, 'green': 0 }
    ]
    var user = new statistics(rows, 0);

    /* attempt to find the number of guesses it took */
    var guess_index = results.content.search('/') - 1;
    if (guess_index == -2) {
        console.log("could not decipher " + results.author.username + "'s wordle");
        return -1;
    }
    user.guesses = results.content[guess_index];

    /* attempt to find the first emoji in the user's results */ 
    var emoji_indexes = [results.content.search(black_square), results.content.search(yellow_square), results.content.search(green_square)]
    var start_index = results.content.length;
    for (let index = 0; index < 3; index++) {
        if ((emoji_indexes[index] >= 0) && (emoji_indexes[index] < start_index)) {
            start_index = emoji_indexes[index];
        }
    }
    if (start_index < 0) {
        console.log("could not find first emoji index in " + results.author.username + "'s wordle");
        return -2;
    }

    /* attempt to decipher how the wordle went */
    let user_grid = results.content.substring(start_index).replace(/\s/g, "");
    var pointer = 0;
    for (let row = 0; row < user.guesses; row++) {
        var letter = 5 * row;
        while (letter < (5 * (row + 1))) {
            if (user_grid[pointer].codePointAt(0) == black_byte) {
                user.grid[row].black++;
                letter++;
            }   
            else {
                pointer++;
                if (user_grid[pointer].codePointAt(0) == green_lowbyte) {
                    user.grid[row].green++;
                    letter++;
                }
                else if (user_grid[pointer].codePointAt(0) == yellow_lowbyte) {
                    user.grid[row].yellow++;
                    letter++;
                }
                else {
                    letter++;
                }
            }
            pointer++;
        }
    }
    console.log(user);
}

exports.wordle_regex = wordle_regex;
exports.wordle_channel = wordle_channel;
exports.admire_wordle = admire_wordle;