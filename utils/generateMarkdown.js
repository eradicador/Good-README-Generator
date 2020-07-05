// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `
  # ${data.title}
  ## Description
    ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test]
  * [Questions]
  ## Installation
  To install run this command:  ${data.installation}
  ## Usage
   to ${data.usage}
  ## ${data.license}
  ## ${data.contribution}
  ## Test
  To run test run this command ${data.test}
  ## Questions
    if you have any question contact me at ${data.contact} and here my github link: 
     [mygithub](https://github.com/${data.name})

`;
}

module.exports = generateMarkdown;
