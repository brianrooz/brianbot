/* json read/write dependencies */
const stats = require('../docs/wordle');

function save_stats(content) {
    fs.writeFile('../docs/wordle.json', JSON.stringify(content), (err) => {
        if (err) { console.error(err); return; };
        console.log("results have been saved!");
    });
}

function read_stats() {
    console.log(stats);
}

exports.save_stats = save_stats;
exports.read_stats = read_stats;