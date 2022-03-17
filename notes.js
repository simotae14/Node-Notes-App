const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your notes...';
};

const addNote = (title, body) => {
  // loading existing notes
  const notes = loadNotes();
  const duplicateNote = notes.find(note => title === note.title);

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString(); // convert Buffer into string
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
}

const removeNote = (title) => {
  // loading existing notes
  const notes = loadNotes();
  const notesToKeep  = notes.filter(note => title !== note.title);
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
}

const listNotes = () => {
  // loading existing notes
  const notes = loadNotes();
  console.log(chalk.blue.inverse('Your notes'));
  notes.forEach(note => console.log(chalk.green.inverse(note.title)))
}

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
};
