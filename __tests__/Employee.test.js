const Employee = require('../lib/Employee');

test('creates Employee object', () => {
  const e = new Employee();
  expect(typeof(e)).toBe('object');
});

test('set employee name', () => {
  const name = 'William';
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("set employee id", () => {
  const testValue = 101;
  const e = new Employee('William', testValue);
  expect(e.id).toBe(testValue);
});

test("set employee email", () => {
  const testValue = "william@test.com";
  const e = new Employee('William', 1, testValue);
  expect(e.email).toBe(testValue);
});

test("get name via getName()", () => {
  const testValue = 'William';
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("get id via getId()", () => {
  const testValue = 101;
  const e = new Employee('William', testValue);
  expect(e.getId()).toBe(testValue);
});

test("get email via getEmail()", () => {
  const testValue = "william@test.com";
  const e = new Employee("William", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test('getRole() should return "Employee"', () => {
  const testValue = "Employee";
  const e = new Employee("William", 1, "william@test.com");
  expect(e.getRole()).toBe(testValue);
});

