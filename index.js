// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
// 1 more packages to require 

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(responses => {
        console.log(responses);
        writeToFile("README.MD", generateMarkdown(responses))
    });
}

// Function call to initialize app
init();





// Table of Contents*** // 

// What is the title of the project? //
// Description // 

// Installation // 
// Usage // 
// License //
// Contributing // 
// Tests // 
// Questions // 

// Should have a footer // 


// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
