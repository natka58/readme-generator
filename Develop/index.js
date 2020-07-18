const fs = require(`fs`)
const inquirer = require(`inquirer`);
const generateMarkdown = require(`./utils/generateMarkdown`);

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: `input`,
            name: `title`,
            message: `What is the title of your project?`

        },
        {
            type: `input`,
            name: `description`,
            message: `Please provide a description of your project`


        },
        {
            type: `input`,
            name: `installation`,
            message: `What are the steps required to install your project?`
        },
        {
            type: `input`,
            name: `usage`,
            message: `Provide instructions and examples for use`
        },
        {
            type: `input`,
            name: `credits`,
            message: `Please list any collaborators and third-party assets`

        },
        {
            type: `checkbox`,
            name: `license`,
            message: `What license would you like to use?`,
            choices: [`GNU GPLv3`, `MIT`, `Mozilla`, `Apache`, `Unlicense`, `None`]
        },
        {
            type: `input`,
            name: `contributing`,
            message: `Would you like to add guidelines to contributers?`
        },
        {
            type: `input`,
            name: `tests`,
            message: `Do you have a test for your application?`

        },
        {
            type: `input`,
            name: `username`,
            message: `What is your GitHub username?`

        },

        {
            type: `input`,
            name: `url`,
            message: `What is your GitHub URL?`

        },
        {
            type: `input`,
            name: `email`,
            message: `What is your e-mail?`

        },
        // {
        //     type: `input`,
        //     name: `badges`,
        //     message: `Enter your badge information` 
        // },




    ]);
}
questions()
    .then(portfolioData => {
        const pageHTML = generateMarkdown(portfolioData);
        fs.writeFile(`README.md`, pageHTML, "utf8", err => {
            if (err) throw new Error(err);

            console.log(`File created! check out README.md in this directory to see it!`);
        });
    });



// function to initialize program
function init() {

}

// function call to initialize program
init();

