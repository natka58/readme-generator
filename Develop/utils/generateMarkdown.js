// function to generate markdown for README
function generateMarkdown(data) {

  const gitHub = `https://img.shields.io/badge/Github-${data.username}-808000`;
  const licenseIcon = `https://img.shields.io/badge/license-${data.license}-yellow.svg`;
  console.log(data);
  return `
  # ** ${data.title} **
  
  \n ![${data.license}](${licenseIcon}) 
  
  
  ## Description
    ${data.description} 
    
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  Steps to install the program are: ${data.installation}
  
  ## Usage
  Example and instrution of use: ${data.usage}
  ![](#)

  ## Credits
  Program collaborators and third party assets: ${data.credits}
  
  ## License
  ${data.license}
  
  ## Contributors
  Quidelines to contributors: ${data.contributors}

  ## Tests
  To test run the following code: ${data.tests}
  
    
  ## Questions
  \n GitHub Username: ${gitHub} 
  \n GitHub URL: ${data.url}
  \n For questions reach our to: ${data.email}.`

  // return `## User Name ` + `\n\n` + `${data.username}`
  //   + `\n\n ` + `## GitHub URL ` + `\n\n` + ` ${data.url}`
  //   + `\n\n` + `## Email ` + `\n\n` + ` ${data.email}`
  //   + `\n\n` + `**# Title** ` + `\n\n` + ` ${data.title}`
  //   + `\n\n` + `## Description ` + `\n\n` + ` ${data.description}`
  //   // +`\n`+ `## Table of Contents `+`\n` + ` ${data.tableOfContents}`
  //   + `\n\n` + `## Installation ` + `\n\n` + ` ${data.installation}`
  //   + `\n\n` + `## Usage ` + `\n\n` + ` ${data.usage}`
  //   + `\n\n` + `## Credits ` + `\n\n` + ` ${data.credits}`
  //   + `\n\n` + `## License ` + `\n\n` + ` ${data.license}`
  //   + `\n\n` + `## Badges ` + `\n\n` + ` ${data.badges}`
  //   + `\n\n` + `## Contributers ` + `\n\n` + ` ${data.contributing}`
  //   + `\n\n` + `## Tests ` + `\n\n` + ` ${data.tests}`;

   
}

module.exports = generateMarkdown;
