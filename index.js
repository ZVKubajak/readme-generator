import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Include packages needed for this application
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const data = await inquirer.prompt([
  {
    name: 'title',
    type: 'input',
    message: 'What is the title of your project?',
  },
  {
    name: 'description',
    type: 'input',
    message: 'Enter a description of your project.',
  },
  {
    name: 'installation',
    type: 'input',
    message: 'Enter installation instructions.',
  },
  {
    name: 'usage',
    type: 'input',
    message: 'Enter usage information.',
  },
  {
    name: 'contribution',
    type: 'input',
    message: 'Enter contribution guidelines.',
  },
  {
    name: 'test',
    type: 'input',
    message: 'Enter test instructions.',
  },
  {
    name: 'license',
    type: 'list',
    message: 'Choose the license you want to use.',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
  },
  {
    name: 'github',
    type: 'input',
    message: 'Enter your GitHub username.',
  },
  {
    name: 'email',
    type: 'input',
    message: 'Enter your email address.',
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./readme-examples/README.md`, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
  writeToFile('README.md', data);
}

// Function call to initialize app
init();