const fs = require('fs');
const chalk = require('chalk');

// const getNotes = () => {
//     const yourNotes = "Your notes...";
//     return yourNotes;
// }

const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title);

    if(!duplicateNote){   
        notes.push ({
            title: title,
            body: body
        });
        console.log(chalk.green.inverse('Note Added!'));
    }
    else{
        console.log(chalk.red.inverse('Note Title Already Taken!'));
    }
    
    saveNotes(notes);
}

const removeNote = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter((note) => note.title !== title);

    if(newNotes.length === notes.length){   
        console.log(chalk.red.inverse('Note Does not Exist!'));
    }
    else{
        console.log(chalk.green.inverse('Note Deleted!'));
    }
    
    saveNotes(newNotes);
}

const listNote = () => {
    console.log(chalk.bold('Your Notes...'));

    const notes = loadNotes();
    notes.forEach(note => {
        console.log('title:',note.title);
    });
}

const readNote = (title) => {
    try{
        const notes = loadNotes();
        const duplicateNote = notes.find(note => note.title === title);
        console.log(chalk.inverse(chalk.bold('Title:'),duplicateNote.title),chalk.bold('\nBody:'),duplicateNote.body);
    } catch(e){
        console.log(chalk.red("Cannot Find the Note!"));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e){
        return [];
    }
}

module.exports = {
    // getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}