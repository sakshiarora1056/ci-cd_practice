/**
 * src/index.js
 * Entry point of the application.
 */

const { greet } = require('./app');

const message = greet('World');
console.log(message);

