const chalk = require('chalk');
// const validator = require('validator');
const getNotes = require('./notes');

console.log(getNotes());

// console.log(validator.isURL('https://mead.io'));
console.log(chalk.green('Success!'));
console.log(chalk.bold('Bold!'));
console.log(chalk.bgGreen('Success Inversed!'));
