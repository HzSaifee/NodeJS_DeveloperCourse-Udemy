const getNotes = require('./notes.js');

// const add = require('./utils.js');

// // const fs = require('fs');

// // // fs.writeFileSync('notes.txt', 'Andrew asked me to change this Message!');
// // fs.appendFileSync('notes.txt', '\nAndrew made me add this Message!');

// const sum = add(-2, 4);

// console.log(sum);

const msg = getNotes();

console.log(msg);