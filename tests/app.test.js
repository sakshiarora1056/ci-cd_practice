/**
 * tests/app.test.js
 * Unit tests for src/app.js
 */

const { greet } = require('../src/app');

describe('greet()', () => {
  test('returns a greeting with the given name', () => {
    expect(greet('World')).toBe('Hello, World! 🚀');
  });

  test('returns a greeting with a custom name', () => {
    expect(greet('GitHub')).toBe('Hello, GitHub! 🚀');
  });

  test('throws an error when name is empty', () => {
    expect(() => greet('')).toThrow('Name must be a non-empty string');
  });

  test('throws an error when name is not a string', () => {
    expect(() => greet(123)).toThrow('Name must be a non-empty string');
  });
});

