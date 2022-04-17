const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const inquire = require('inquirer');
const fs = require('fs')

const generateSite = require('./src/generateSite');
const Employee = require('./lib/Employee');

team = [];

const questions = {
  message: "Please select the Team Members role:",
  type: "list",
  name: "role",
  choices: ["Add Manager", "Add Engineer", "Add Intern", "Exit"],
};

const manager = {
  message: "What is the Manager's office phone number",
  type: "input",
  name: "office",
};

const engineer = {
  message: "What is the Engineer's GitHub username",
  type: "input",
  name: "github",
};

const intern = {
  message: "What is the Intern's school name",
  type: "input",
  name: "school",
};

function start() {
  employee = [
    {
      message: "What is the Team Members name?",
      type: "input",
      name: "name",
    },
    {
      message: "What is the Team Members ID number?",
      type: "input",
      name: "id",
    },
    {
      message: "What is the Team Members email?",
      type: "input",
      name: "email",
    },
  ];
}

start();