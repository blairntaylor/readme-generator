// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create a function to initialize app
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
        //what type of license, appears at top, add a badge
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
    .then(
      ({
        title,
        description,
        installation,
        usage,
        contribute,
        tests,
        license,
        github,
        email,
      }) => {
        const template = `${title}

          License Badge: ${license}

          [## Description]
          [## Installation]
          [## Usage]
          [## Contributing]
          [## Tests]

          ## Description
          ${description}

          ## Installation
          ${installation}

          ##Usage
          ${usage}

          ##Contributing
          ${contribute}

          ##Tests
          ${tests}

          ##Screenshot

          ##License
          ${license}

          ##Questions
          GitHub username: ${github}
          Email address: ${email}`;
        //calling function
        writeFile(title, template);
      }
    );
  //function to write file
  function writeFile(fileName, template) {
    fs.writeFile("README.md", template, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("README generated.", template);
      }
    });
  }
}

// Function call to initialize app
init();
