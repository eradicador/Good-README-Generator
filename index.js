const inquirer = require("inquirer");
var fs = require('fs');

// array of questions for user
const questions = [{
    type: "input",
    name: "name",
    message: "What is your github username?"
},
{
    type: "input",
    name: "contact",
    message:"what is your email"
},
{   type: "input",
    name: "project",
    message:"what is your project name"
},
{   type: "input",
    name: "description",
    message:"describe your project"
},
{   type: "list",
    name: "table of contents",
    message:"whats the table of contents for your project"
},
{   type: "input",
    name: "installation",
    message:"how do you install your app"
},
{   type: "input",
    name: "usage",
    message:"whats the app usage "
},
{   type: "input",
    name: "license",
    message:"what is your license"
},
{   type: "input",
    name: "contribution",
    message:"someone contribute in your app developing"
},
{   type: "input",
    name: "test",
    message:"how do you test your project"
},
{   type: "input",
    name: "questions",
    message:"do you have any questions"
},
];

// function to write README file
function writeToFile(fileName, data) {
    console.log("writeToFile")
}

// function to initialize program
function init() {
    
    inquirer.prompt(questions).then(answers => {
        console.log(answers)
        writeToFile()
      })
   

}

// function call to initialize program
init();
