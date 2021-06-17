#!/usr/bin/env node

const shell = require("shelljs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "list",
      message: "Select the language: ",
      name: "lang",
      choices: ["Java", "C++"],
    },
  ])
  .then((answers) => {
    console.log("Cloning the template...");
    shell.exec("ls");
    if (answers.lang === "Java") {
      shell.exec(`./jscript.sh`);
      console.log("Done!");
    } else if (answers.lang === "C++") {
      shell.exec(`./cscript.sh`);
      console.log("Done!");
    } else {
      console.log("ERROR!!\n Make sure you have git and npm installed.");
    }
  })
  .catch((error) => {
    console.log("ERROR!!\n Make sure you have git and npm installed.");
  });
