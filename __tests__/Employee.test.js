// import Employee.js
const Employee = require('../lib/Employee');

// create new Employee
test('creates a new Employee', () => {
  const employee = new Employee('William Employee', 1, 'william@employee.com', 'role');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});