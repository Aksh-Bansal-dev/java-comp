#!/usr/bin/env node

const shell = require("shelljs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "list",
      message: "Select the language: ",
      name: "lang",
      choices: ["Java", "C++", "VSC task"],
    },
  ])
  .then((answers) => {
    console.log("Cloning the template...");
    if (answers.lang === "Java") {
      shell.exec(
        `git clone https://github.com/Aksh-Bansal-dev/javaCompetitiveProgramming.git`
      );
      console.log("Done!");
    } else if (answers.lang === "C++") {
      shell.exec(`git clone https://github.com/masterchief164/templates.git`);
      console.log("Done!");
    } else if (answers.lang === "VSC task") {
      shell.exec(
        `wget -P .vscode https://raw.githubusercontent.com/Aksh-Bansal-dev/javaCompetitiveProgramming/main/.vscode/tasks.json`
      );
      console.log("Done!");
    } else {
      console.log("ERROR!!\n Make sure you have git and npm installed.");
    }
  })
  .catch((error) => {
    console.log("ERROR!!\n Make sure you have git and npm installed.");
  });
