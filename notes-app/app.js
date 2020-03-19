const yargs = require('yargs');
const chalk = require('chalk');
// const validator = require('validator');
const getNotes = require('./notes.js');
// // const add = require('./utils.js');
// // // const fs = require('fs');

// // // // fs.writeFileSync('notes.txt', 'Andrew asked me to change this Message!');
// // // fs.appendFileSync('notes.txt', '\nAndrew made me add this Message!');

// // const sum = add(-2, 4);
// // console.log(sum);

// const msg = getNotes();
// console.log(msg);

// // console.log(validator.isEmail('hzsaifee52@gmail.com'));

// console.log(chalk.red.bold('Error!'));
// console.log(chalk.green.bold.inverse('Success!'));

// const command = process.argv[2];

// if(command === 'add'){
//     console.log('Adding Note!');
// }

// else if(command === 'remove'){
//     console.log('Removing Note!');
// }

// Create Add Command
yargs.command({
    command: 'add',
    describe: 'Adding a new Note',
    handler: function(){
        console.log('Adding a New Note!')
    }
})

// Create Remove Command
yargs.command({
    command: 'remove',
    describe: 'Removing a Note',
    handler: function(){
        console.log('Removing a Note!')
    }
})

// Create read Command
yargs.command({
    command: 'read',
    describe: 'Reading a Note',
    handler: function(){
        console.log('Reading a Note!')
    }
})

// Create List Command
yargs.command({
    command: 'list',
    describe: 'Listing a Note',
    handler: function(){
        console.log('Listing a Note!')
    }
})

console.log(yargs.argv);