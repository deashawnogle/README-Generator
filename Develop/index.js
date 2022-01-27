// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is title of the Project?",
        name: "title",
        type: "input"
    },
    {
        message: "What is description of the Project?",
        name: "description",
        type: "input"
    },
    {
        message: "Installation for the Project.",
        name: "installation",
        type: "input"
    },
    {
        message: "Usage of the Project.",
        name: "usage",
        type: "input"
    },
    {
        message: "Contribution of the Project.",
        name: "contribution",
        type: "input"
    },
    {
        message: "Test instruction of the Project.",
        name: "test",
        type: "input"
    },
    {
        message: "What is your Github account?",
        name: "github",
        type: "input"
    },
    {
        message: "Provide your email address for further questions.",
        name: "email",
        type: "input"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, data, (err) =>
        err ? console.error('Error! : ' + err) : console.log('README generated'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => writeToFile('README.md', generateMarkdown(data)))
}

// Function call to initialize app
init();
