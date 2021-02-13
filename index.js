// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { title } = require("process");

// TODO: Create an array for the questions
const questions = [];

// Questions: title, description, installation instructions, usage information, contribution guidelines, and test instructions, license, GitHub username, email address, Table of Contents

inquirer
  .prompt([
    {
      //project title
      type: "input",
      message: "What is the app title?",
      name: "title",
    },
    {
      //project description
      type: "input",
      message: "What is the app description?",
      name: "description",
    },
    {
      //installation instructions
      type: "input",
      message: "How do you install the app?",
      name: "install",
    },
    {
      type: "input",
      message: "What are the instructions for use?",
      name: "instructions",
    },
    {
      type: "input",
      message: "How do you make contributions?",
      name: "contribute",
    },
    {
      type: "input",
      message: "How do you report errors?",
      name: "report",
    },
  ])

  .then((response) => {
    const information = `${response}.json`;
    console.log(response);

    fs.writeFile("README.md", JSON.stringify(response, null, "\n")),
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      };
  });

//Command line application thet agenerate a README
// TODO: Create a function to write README file
// invoke application using  `````  bash  node index   `````
// function generateReadme(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
