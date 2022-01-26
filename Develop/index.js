// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

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
        message: "Installation for the Project",
        name: "installation",
        type: "input"
    },
    {
        message: "Usage of the Project",
        name: "usage",
        type: "input"
    },
    {
        message: "Contribution of the Project",
        name: "contribution",
        type: "input"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
