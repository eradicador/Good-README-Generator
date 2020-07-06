const inquirer = require("inquirer");
var fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{   
    type: "input",
    name: "title",
    message:"what is your project name"
},
{   type: "input",
    name: "description",
    message:"describe your project"
},
{   type: "input",
    name: "installation",
    message:"how do you install your app",
    default: "npm i"
},
{   type: "input",
    name: "usage",
    message:"whats the app usage "
},
{   type: "input",
    name: "tests",
    message:"how do you test your project",
    default:"run test"
},
{
    type: "input",
    name: "name",
    message: "What is your github username?"
},
{
    type: "input",
    name: "contact",
    message:"what is your email"
},
];
// function to write README file
function writeToFile(fileName, data) {
    console.log("writeToFile")
    fs.writeFile(fileName, data, function(err,response){
    process.exit()
    })
}
// function to initialize program
function init() {
    
    inquirer.prompt(questions).then(answers => {
        writeToFile("README.md",generateMarkdown(answers))
      })
}
// function call to initialize program
init();
