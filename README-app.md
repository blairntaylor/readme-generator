<!-- # 09 Homework README Generator

## TO DOs in Advance

1. Create repo
2. add const fs and const inquirer in the index.js
3. do a npm init -y
4. do an npm i inquirer --save for the node modules
 -->

    const ReadMe = `${title}
        License Badge: ${license}

        ##Table of Contents
        ##Description
        ## Installation
        ##Usage
        ##Contributing
        ##Tests
        ##License
        ##Questions

        ##Description
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
        Email address: ${email}

        `;
