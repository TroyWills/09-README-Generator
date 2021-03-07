// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")

// Array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Description?',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Installation instructions?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How to use:',
    },
    {
        type: 'input',
        name: 'License',
        message: 'License V.00',
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Who contributed on the project',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Tests?',
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Any Questions?',
    },
];

// Function to write README file
 function writeToFile(fileName, data) {

 }

// Function to initialize app
function init() {
    inquirer.prompt(questions).then(responses => {
        console.log(responses);
        writeToFile("README.MD", generateMarkdown(responses))
    });
}

// Function call to initialize app
 init();





