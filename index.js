//node modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');


// this is the function for generating readme file
function generateREADME(answers) {

    return `# ${answers.title}
      
  #### Table of Contents
  1. [Project Description](#project-description)
  2. [Installation Instructions](#installation-instructions)
  3. [Usage Information](#usage-information)
  4. [Contributor Guidelines](#contributor-guidelines)
  5. [Code of Conduct](#code-of-conduct)
  6. [Test Instructions](#test-instructions)
  7. [License](#license)
  8. [Questions](#questions)
  ## Project Description
  * ${answers.description}
  ## Installation Instructions
  * ${answers.Installation}
  ## Usage Information
  * ${answers.Usage}
  ## Contributor Guidelines
  * ${answers.Contributing}
  ## Test Instructions
  * ${answers.tests}
  ## License
  * licensed under the ${answers.license}
  ## Questions
  * For additional help or questions about collaboration, please reach out to ${answers.email}
  * Follow me on Github at [${answers.git}](http://github.com/${answers.git})`;
 
  }
//inquirer to generate questions
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the Title of your project? (Required) ',
      validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('You need to enter a title to continue!');
            return false;
        }
    }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Feel free to write your description here: (Required) ',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter a description to continue!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'Please provide step-by-step installation instructions for your project. (Required)',
        validate: InstallationInput => {
            if (InstallationInput) {
                return true;
            } else {
                console.log('no shortcuts!!!It is essential to provide a description of your project');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'How will someone use this? (Required) ',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your use instructions!');
                return false;
            }
        }
      },
      
      {
        type: 'input',
        name: 'Contributing',
        message: 'How can others contribute to this project? ',
        validate: ContributingInput => {
            if (ContributingInput) {
                return true;
            } else {
                console.log('How can others contribute to this project?');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Describe the tests written for your application and how to use them:',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please provide instructions on how others can test the project ...');
                return false;
            }
        }
    },

     //checkbox that allows license choice
      {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project (Required)',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: choices => {
            if (choices) {
                return true;
            } else {
                console.log('You must pick a license for the project!');
                return false;
            }
        }
    },
      {
        type: 'input',
        name: 'git',
        message: 'What is your GitHub username? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your email.');
            return false;
          }
        }
      },

  ])
  .then(answers => {
    const readme = generateREADME(answers);
      
    fs.writeFile('README.md',readme , err => {
    err ? console.log(err) : console.log('Success!')
   });

  })



