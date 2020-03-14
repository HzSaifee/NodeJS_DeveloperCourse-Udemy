const fs = require('fs');

// fs.writeFileSync('notes.txt', 'Andrew asked me to change this Message!');
fs.appendFileSync('notes.txt', '\nAndrew made me add this Message!');