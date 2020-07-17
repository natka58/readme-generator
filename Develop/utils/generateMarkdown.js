// function to generate markdown for README
function generateMarkdown(data) {
  
  return `## User Name ` + `\n\n` + `${data.username}`
    + `\n\n ` + `## GitHub URL ` + `\n\n` + ` ${data.url}`
    + `\n\n` + `## Email ` + `\n\n` + ` ${data.email}`
    + `\n\n` + `**# Title** ` + `\n\n` + ` ${data.title}`
    + `\n\n` + `## Description ` + `\n\n` + ` ${data.description}`
    // +`\n`+ `## Table of Contents `+`\n` + ` ${data.tableOfContents}`
    + `\n\n` + `## Installation ` + `\n\n` + ` ${data.installation}`
    + `\n\n` + `## Usage ` + `\n\n` + ` ${data.usage}`
    + `\n\n` + `## Credits ` + `\n\n` + ` ${data.credits}`
    + `\n\n` + `## License ` + `\n\n` + ` ${data.license}`
    + `\n\n` + `## Badges ` + `\n\n` + ` ${data.badges}`
    + `\n\n` + `## Contributers ` + `\n\n` + ` ${data.contributing}`
    + `\n\n` + `## Tests ` + `\n\n` + ` ${data.tests}`;

   

}

module.exports = generateMarkdown;
