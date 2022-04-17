const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const Manager = require('../lib/Manager');

function generateCards(team) {
  let cards = [];
  for(let i = 0; i < team.length; i++) {
    const teamArray = team[i];
    switch(teamArray.getRole()) {
      case 'Engineer':
        const engineer = new Engineer(teamArray.id, teamArray.name, teamArray.email, teamArray.github);
        cards.push(engineerCard(engineer));
        break;
        case 'Intern':
          const intern = new Intern(teamArray.id, teamArray.name, teamArray.email, teamArray.school);
          cards.push(internCard(intern));
          break;
      case 'Manager':
        const manager = new Manager(teamArray.id, teamArray.name, teamArray.email, teamArray.officeNumber);
        cards.push(managerCard(manager));
        break;
    }
  }
  return cards.join(``);
}

let engineerCard = (Engineer) => {
  return `
    <h3>${Engineer.getRole()}</h3>
  `
}

let internCard = (Intern) => {
  return `
    <h3>${Intern.getRole()}</h3>
  `;
};

let managerCard = (Manager) => {
  return `
    <h3>${Manager.getRole()}</h3>
  `;
};

function generateSite(team) {
  console.log(team)
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team!</title>
  </head>
  <body>
    <h1>My Team</h1>

    <div>
      ${generateCards(team)}
    </div>
  
  </body>
  </html>
  `;
}

module.exports = generateSite;