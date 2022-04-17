// include Employee class
const Employee = require("./Employee");

// create Manager class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // use Employee class
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  // set role as Manager
  getRole() {
    return "Manager";
  }
}

// export Manager class
module.exports = Manager;