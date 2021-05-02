#!/usr/bin/env node

const shell = require("shelljs");

console.log("Cloning the template...")
shell.exec(`${process.cwd()}/script.sh`);
console.log("Done!");
