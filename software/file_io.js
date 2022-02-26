/* json read/write dependencies */
const fs = require('fs');

function save_stats(content) {
    fs.writeFile('../docs/wordle.json', JSON.stringify(content), (err) => {
        if (err) { console.error(err); return; };
        console.log("results have been saved!");
    });
}

exports.save_stats = save_stats;