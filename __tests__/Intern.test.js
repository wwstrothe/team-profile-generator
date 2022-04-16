const Intern = require("../lib/Intern");

test("set school", () => {
  const testValue = "South Harmon Institute of Technology";
  const e = new Intern("William", 1, "william@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("William", 1, "william@test.com");
  expect(e.getRole()).toBe(testValue);
});

test("get GitHub username via getGitHub", () => {
  const testValue = "bogusUser";
  const e = new Intern("William", 1, "william@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
