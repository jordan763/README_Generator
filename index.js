const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);



function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "project",
      message: "Project title?"
    },
    {
      type: "input",
      name: "description",
      message: "Description of project?"
    },
    {
      type: "input",
      name: "github",
      message: "Github username?"
    },
    {
      type: "input",
      name: "email",
      message: "Email address?"
    },
    {
      type: "input",
      name: "lincense",
      message: "License?"
    },
    {
      type: "input",
      name: "usage",
      message: "Usage Information?"
    },
    {
      type: "input",
      name: "contibution",
      message: "Contribution guidelines?"
    },
    {
      type: "input",
      name: "test",
      message: "Test Instruction?"
    },
    {
      type: "input",
      name: "questions",
      message: "Question?"
    },
  ]);
}



function createReadMe(answers) {
  return `
# ${answers.project}

# Table of Content
-[Description](#description)
-[Usage Information](#Usage_Information)
-[Contibution](#contibution)
-[Test Instruction](#Test_Instruction)
-[GitHub Account](#Github_Account)
-[Email](#email)
-[License](#lincense)
-[Questions](#questions)

# Description

*${answers.description}

# Usage_Information

*${answers.usage}

# Contibution

*${answers.contibution}

# Test_Instruction

*${answers.test}

# Github_Account

*${answers.github}

# Email

*${answers.email}

# Lincense

*${answers.lincense}

# Questions

* ${answers.questions}


  `
}

promptUser()
  .then(function (answers) {
    const createFile = createReadMe(answers)

    return writeFileAsync("README.md", createFile);
  })
  .then(function () {
    console.log("Successfully wrote to README.md");
  })
  .catch(function (err) {
    console.log(err);
  });












