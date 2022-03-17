const chalk = require('chalk');
const yargs = require('yargs');
const {
  getNotes,
  addNote,
  removeNote,
} = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    }
  },
  handler: function (argv) {
    addNote(argv.title, argv.body);
  }
})

// create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    }
  },
  handler: function (argv) {
    removeNote(argv.title);
    // console.log('Removing the note!');
  }
})

// create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: function () {
    console.log('Listing out all notes!');
  }
})

// create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Reading a note!');
  }
})

// add, remove, read, list on notes
// console.log(yargs.argv);
yargs.parse();
