const Employee = require('../lib/Employee');

test('creates Employee object', () => {
  const e = new Employee();
  expect(typeof(e)).toBe('object');
});

test('get employee name', () => {
  const name = 'William';
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("get employee id", () => {
  const testValue = 101;
  const e = new Employee('bogus', testValue);
  expect(e.id).toBe(testValue);
});

test("get employee email", () => {
  const testValue = "william@test.com";
  const e = new Employee('bogus', 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "William";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 101;
  const e = new Employee("bogus", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "william@test.com";
  const e = new Employee("bogus", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test('getRole() should return "Employee"', () => {
  const testValue = "Employee";
  const e = new Employee("William", 1, "william@test.com");
  expect(e.getRole()).toBe(testValue);
});

