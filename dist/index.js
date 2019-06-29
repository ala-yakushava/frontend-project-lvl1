"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const greet = () => {
  const actual = _readlineSync.default.question('May I have your name? ');

  console.log(`Hello, ${actual}!`);
};

var _default = greet;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJncmVldCIsImFjdHVhbCIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFDbEIsUUFBTUMsTUFBTSxHQUFHQyxzQkFBYUMsUUFBYixDQUFzQix3QkFBdEIsQ0FBZjs7QUFFQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsVUFBU0osTUFBTyxHQUE3QjtBQUNELENBSkQ7O2VBTWVELEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5jb25zdCBncmVldCA9ICgpID0+IHtcbiAgY29uc3QgYWN0dWFsID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdNYXkgSSBoYXZlIHlvdXIgbmFtZT8gJyk7XG5cbiAgY29uc29sZS5sb2coYEhlbGxvLCAke2FjdHVhbH0hYCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBncmVldDsiXX0=