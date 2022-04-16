// WRITE CODE TO DEFINE AND EXPORT ENGINEER CLASS
// THIS CLASS SHOULD INHERIT FROM Employee
const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGitHub() {
    return this.github;
  }
  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;