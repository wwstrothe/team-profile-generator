// include Employee class
const Employee = require('./Employee');

// create Engineer class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // use Employee class
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  // set role as Engineer
  getRole() {
    return 'Engineer';
  }
}

// export Engineer class
module.exports = Engineer;