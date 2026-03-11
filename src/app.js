/**
 * src/app.js
 * Core application logic.
 */

/**
 * Returns a greeting string.
 * @param {string} name
 * @returns {string}
 */
function greet(name) {
  if (!name || typeof name !== 'string') {
    throw new Error('Name must be a non-empty string');
  }
  return `Hello, ${name}! 🚀`;
}

module.exports = { greet };

