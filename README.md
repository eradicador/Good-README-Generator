# Readme Generator

## Description
As a developer an creating an application that easy generates a README file for a project. The Application uses node.js to create the readme, node.js is a javascript environment that executes JavaScript code outside a web browser. A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README.
This command-line application uses the Inquirer package which provides the user interface and the inquiry session flow for the generating the README file. The node index.js command will be use to start the application, then the user will be prompt with a series of questions for the the README file, the user's answers will be use to fill the content in the README file. The app is finalized with no bugs so the user will have no problems generating the readme file.

## Screenshot 
<img src ="screenshot.png" width="500">

## Link to deployed app
https://github.com/eradicador/good-README-generator

## Link to app video walkthrough
https://drive.google.com/file/d/162Gk8Lhyq8KR7B00d69eKAOh-DT4BYGh/view

## Index.js
line 2 script to require inquirer

line 4 to use the file system module

line 6 link to generate markdown

lines 9 to 42 array of questions for user

line 44 function to write README file

line 51 function to initialize program

line 58 function call to initialize program

## GenerateMarkdown.js
line 2 function to generate markdown for README

lines 5 to 56 template for readme file fill with the answers from the user

## Badge
![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen)

## License

MIT License

Copyright (c) [2020] [Michael Amaya]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributing
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)