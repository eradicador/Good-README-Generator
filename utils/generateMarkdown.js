// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `
  # this is my title: ${data.project}
  ## this is the description: ${data.description}
  # this is the author: ${data.name}
  ##
  1.
  2.
  3.


`;
}

module.exports = generateMarkdown;
