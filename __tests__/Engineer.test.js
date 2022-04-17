// import Engineer.js file
const Engineer = require('../lib/Engineer');

// create new Engineer
test('create a new Engineer', () => {
  const engineer = new Engineer('William Engineer', 3, 'william@engineer.com', 'williamgitub')

  expect(engineer.name).toEqual(expect.any(String))
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});