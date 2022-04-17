const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

function generateCards(team) {
  let cards = [];
  for(let i = 0; i < team.length; i++) {
    const teamArray = team[i];
    switch(teamArray.getRole()) {
      case 'Manager':
        const manager = new Manager(
          teamArray.id, 
          teamArray.name, 
          teamArray.email, 
          teamArray.officeNumber
        );
        cards.push(managerCard(manager));
        break;
      case 'Engineer':
        const engineer = new Engineer(
          teamArray.id, 
          teamArray.name, 
          teamArray.email, 
          teamArray.github
        );
        cards.push(engineerCard(engineer));
        break;
      case 'Intern':
        const intern = new Intern(
          teamArray.id, 
          teamArray.name, 
          teamArray.email, 
          teamArray.school
        );
        cards.push(internCard(intern));
        break;
    }
  }
  return cards.join(``);
}

let managerCard = (Manager) => {
  return `
    <div class="card h-100 m-2 border-success" style="width: 30%;">
      <div class="card-header">
        <h3>${Manager.getName()}</h3>
        <h6 class="mb-2 text-muted">${Manager.getRole()}</h6>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
      </ul>
    </div>
  `;
};

let engineerCard = (Engineer) => {
  return `
    <div class="card h-100 m-2 border-warning" style="width: 30%;">
      <div class="card-header">
        <h3>${Engineer.getName()}</h3>
        <h6 class="mb-2 text-muted">${Engineer.getRole()}</h6>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Engineer.getId()}</li>
        <li class="list-group-item">Email: <a href='mailto:${Engineer.getEmail()}'>${Engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href='https://github.com/${Engineer.getGithub()}'>${Engineer.getGithub()}</a></li>
      </ul>
    </div>
  `;
}

let internCard = (Intern) => {
  return `
    <div class="card h-100 m-2 border-info" style="width: 30%;">
      <div class="card-header">
        <h3>${Intern.getName()}</h3>
        <h6 class="mb-2 text-muted">${Intern.getRole()}</h6>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Intern.getId()}</li>
        <li class="list-group-item">Email: <a href='mailto:${Intern.getEmail()}'>${Intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${Intern.getSchool()}</li>
      </ul>
    </div>
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>My Team!</title>
  </head>
  <body>
    <header>
      <nav class="navbar bg-danger justify-content-center">
        <h1>Team Profile</h1>
      </nav>
    </header>

    <div class="d-flex flex-row flex-wrap justify-content-center">
      ${generateCards(team)}
    </div>
  
  </body>
  </html>
  `;
}

module.exports = generateSite;