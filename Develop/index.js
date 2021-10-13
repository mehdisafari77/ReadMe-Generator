// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")

const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {   
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {   
        type: "input",
        name: "description",
        message: "What does your app/website do?"
    },
    {   
        type: "input",
        name: "technology",
        message: "What technology did you use?"
    },
    {   
        type: "input",
        name: "installation",
        message: "How to install it?"
    },
    {   
        type: "input",
        name: "usage",
        message: "What is it used for?"
    },
    {   
        type: "list",
        name: "license",
        message: "What license do you use?",
        choices:["MIT", "Apache", "Mozilla", "ISC", "GNU GPL V3", "None"]
    },
    {   
        type: "input",
        name: "tests",
        message: "Enter test details here"
    },
    {   
        type: "input",
        name: "github",
        message: "What is your Github username?"
    },
    {   
        type: "input",
        name: "email",
        message: "What is your email?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
        fs.writeFile("README.md", generateMarkdown(response), err => {
            console.log(err)
        })
    })
}

// Function call to initialize app
init();
