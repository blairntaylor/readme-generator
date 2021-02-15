// file system and inquirer packages needed for this app
const fs = require("fs");
const inquirer = require("inquirer");

// function to initialize app
// includes prompts collecting info
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the app title?",
        name: "title",
      },
      {
        type: "input",
        message: "What is the app description?",
        name: "description",
      },
      {
        type: "input",
        message: "How do you install the app?",
        name: "installation",
      },
      {
        type: "input",
        message: "What are the instructions for use?",
        name: "usage",
      },
      {
        type: "input",
        message: "How do you make contributions?",
        name: "contribute",
      },
      {
        type: "input",
        message: "How do you report errors?",
        name: "tests",
      },
      {
        type: "list",
        message: "What type of license?",
        name: "license",
        choices: ["MIT", "GNU", "Apache", "ISC"],
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
    ])
    // promise method
    // calling answers, and function to create template
    .then((answers) => {
      const {
        title,
        description,
        installation,
        usage,
        contribute,
        tests,
        license,
        github,
        email,
      } = answers;

      // template layout
      const template = `${title}

License Badge: ${license}

## [Description](#description)
## [Installation](#installation)
## [Usage](#usage)
## [Contributing](#contribute)
## [Tests](#tests)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contributing
${contribute}

## Tests
${tests}

## Screenshot

## License
This project is licensed to: ${license}

## Questions
GitHub username: ${github}
Email address: [${email}](mailto:${email})`;
      // calling writeFile function
      writeFile(title, template);
    });
  //function to writeFile creating new README, using template info and console log error data
  function writeFile(fileName, template) {
    fs.writeFile("README.md", template, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("README generated.");
      }
    });
  }
}

// initialing function being called
init();
