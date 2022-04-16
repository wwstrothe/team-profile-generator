const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('set GitHub username', () => {
  const testValue = 'bogusUser';
  const e = new Engineer('William', 1, 'william@test.com', testValue);
  expect(e.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = 'Engineer';
  const e = new Engineer("William", 1, "william@test.com");
  expect(e.getRole()).toBe(testValue);
});

test('get GitHub username via getGitHub', () => {
  const testValue = 'bogusUser';
  const e = new Engineer('William', 1, 'william@test.com', testValue)
  expect(e.getGitHub()).toBe(testValue);
});