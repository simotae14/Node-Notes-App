const fs = require('fs');

const getNotes = () => {
  return 'Your notes...';
};

const addNote = (title, body) => {
  // loading existing notes
  const notes = loadNotes();
  const duplicateNotes  = notes.filter(note => title === note.title);
  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log('New note added!');
  } else {
    console.log('Note title taken!');
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

module.exports = {
  getNotes,
  addNote,
};
