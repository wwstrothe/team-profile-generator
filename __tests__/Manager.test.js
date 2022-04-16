const Manager = require('../lib/Manager');

test('Set Office number', () => {
  const testValue = 201;
  const e = new Manager('William', 1, 'william@test.com', testValue)
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("William", 1, "william@test.com");
  expect(e.getRole()).toBe(testValue);
});

test("get office number  via getOffice()", () => {
  const testValue = 201;
  const e = new Manager("William", 1, "william@test.com", testValue);
  expect(e.getOFficeNumber()).toBe(testValue);
});