"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const greet = () => {
  const actual = _readlineSync.default.question('May I have your name? ');

  console.log(`Hello, ${actual}!\n`);
  return actual;
};

var _default = greet;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJncmVldCIsImFjdHVhbCIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFDbEIsUUFBTUMsTUFBTSxHQUFHQyxzQkFBYUMsUUFBYixDQUFzQix3QkFBdEIsQ0FBZjs7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsVUFBU0osTUFBTyxLQUE3QjtBQUNBLFNBQU9BLE1BQVA7QUFDRCxDQUpEOztlQU1lRCxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcblxuY29uc3QgZ3JlZXQgPSAoKSA9PiB7XG4gIGNvbnN0IGFjdHVhbCA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xuICBjb25zb2xlLmxvZyhgSGVsbG8sICR7YWN0dWFsfSFcXG5gKTtcbiAgcmV0dXJuIGFjdHVhbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdyZWV0O1xuIl19