const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const inquirer = require('inquirer');
const fs = require('fs')

const generateSite = require('./src/generateSite');

team = [];

const mQuestions = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the Manager's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the Manager's ID number?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the Manager's email address?",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the Manager's office number?",
    },
    {
      type: 'list',
      name: 'addMember',
      message: 'What type of Team Member would you like to add next?',
      choices: ['Engineer', 'Intern', 'No more Team Members'],
    }
  ])
  .then((mAnswers) => {
    const manager = new Manager(
      mAnswers.id, 
      mAnswers.name, 
      mAnswers.email, 
      mAnswers.officeNumber
      )
    team.push(manager)
    switch(mAnswers.addMember) {
      case 'Engineer':
        eQuestions();
        break;
      case 'Intern':
        iQuestions();
        break;
      default: 
      writeToFile('dist/index.html', generateSite(team))
    }
  });
};

const eQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Engineer's ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Engineer's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the Engineer's GitHub username?",
      },
      {
        type: "list",
        name: "addMember",
        message: "What type of Team Member would you like to add next?",
        choices: ["Engineer", "Intern", "No more Team Members"],
      },
    ])
    .then((eAnswers) => {
      const engineer = new Engineer(
        eAnswers.id,
        eAnswers.name,
        eAnswers.email,
        eAnswers.github
      );
      team.push(engineer);
      switch (eAnswers.addMember) {
        case "Engineer":
          eQuestions();
          break;
        case "Intern":
          iQuestions();
          break;
        default:
          writeToFile("dist/index.html", generateSite(team));
      }
    });
};


const iQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Intern's ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Intern's email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the Intern's school?",
      },
      {
        type: "list",
        name: "addMember",
        message: "What type of Team Member would you like to add next?",
        choices: ["Engineer", "Intern", "No more Team Members"],
      },
    ])
    .then((iAnswers) => {
      const intern = new Intern(
        iAnswers.id,
        iAnswers.name,
        iAnswers.email,
        iAnswers.school
      );
      team.push(intern);
      switch (iAnswers.addMember) {
        case "Engineer":
          eQuestions();
          break;
        case "Intern":
          iQuestions();
          break;
        default:
          writeToFile("dist/index.html", generateSite(team));
      }
    });
};

mQuestions();

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log(`File saved to ${filename}`)
    });
};