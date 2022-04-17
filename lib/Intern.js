// include Employee class
const Employee = require("./Employee");

// create Intern class
class Intern extends Employee {
  constructor(name, id, email, school) {
    //use Employee class
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  // set role as Intern
  getRole() {
    return "Intern";
  }
}

// export Intern class
module.exports = Intern;