const yargs = require('yargs');
const chalk = require('chalk');
const Notes = require('./notes.js');
////////////////////////////////////////////////////////////////////////////
// const validator = require('validator');
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

////////////////////////////////////////////////////////////////////////////
// Create Add Command
yargs.command({
    command: 'add',
    describe: 'Adding a new Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        Notes.addNote(argv.title,argv.body);
    }
})

// Create Remove Command
yargs.command({
    command: 'remove',
    describe: 'Removing a Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        Notes.removeNote(argv.title);
    }
})

// Create read Command
yargs.command({
    command: 'read',
    describe: 'Reading a Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        Notes.readNote(argv.title);
    }
})

// Create List Command
yargs.command({
    command: 'list',
    describe: 'Listing out all the Notes',
    handler() {
        Notes.listNote();
    }
})

// console.log(yargs.argv);
yargs.parse();