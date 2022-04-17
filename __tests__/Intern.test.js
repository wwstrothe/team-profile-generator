// import Intern.js file
const Intern = require("../lib/Intern");

// create new Intern
test("creates a new Intern", () => {
  const intern = new Intern('William Intern', 4, 'william@intern.com', 'college dropout');

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});
