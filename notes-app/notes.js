const fs = require('fs');
const chalk = require('chalk');

const getNotes = function(){
    const yourNotes = "Your notes...";
    return yourNotes;
}

const addNote = function (title, body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note){
     return note.title === title;   
    })

    if(duplicateNotes.length === 0){   
        notes.push ({
            title: title,
            body: body
        });
        console.log('Note Added!');
    }
    else{
        console.log('Note Title Already Taken!');
    }
    
    saveNotes(notes);
}

const removeNote = function (title){
    const notes = loadNotes();
    const newNotes = notes.filter(function (note){
        if(note.title !== title)
            return note;   
    })

    if(newNotes.length === notes.length){   
        console.log(chalk.red.inverse('Note Does not Exist!'));
    }
    else{
        console.log(chalk.green.inverse('Note Deleted!'));
    }
    
    saveNotes(newNotes);
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e){
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}