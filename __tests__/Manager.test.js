// import Manager.js file
const Manager = require('../lib/Manager');

// create new Manager
test('create a new Manager', () => {
  const manager = new Manager('William Manager', 2, 'william@manager.com', 934);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});