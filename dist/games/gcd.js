"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.descriptionGame = exports.getPuzzle = void 0;

var _utilites = _interopRequireDefault(require("../utilites"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const descriptionGame = 'Find the greatest common divisor of given numbers.';
exports.descriptionGame = descriptionGame;

const applyEuclid = (a, b) => {
  if (b === 0) return a;
  return applyEuclid(b, a % b);
};

const getPuzzle = () => {
  const firstNumber = (0, _utilites.default)();
  const secondNumber = (0, _utilites.default)();
  const currentQuestion = `${firstNumber} ${secondNumber}`;
  const currentAnswer = applyEuclid(firstNumber, secondNumber);
  return [currentQuestion, currentAnswer];
};

exports.getPuzzle = getPuzzle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9nY2QuanMiXSwibmFtZXMiOlsiZGVzY3JpcHRpb25HYW1lIiwiYXBwbHlFdWNsaWQiLCJhIiwiYiIsImdldFB1enpsZSIsImZpcnN0TnVtYmVyIiwic2Vjb25kTnVtYmVyIiwiY3VycmVudFF1ZXN0aW9uIiwiY3VycmVudEFuc3dlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsTUFBTUEsZUFBZSxHQUFHLG9EQUF4Qjs7O0FBRUEsTUFBTUMsV0FBVyxHQUFHLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVO0FBQzVCLE1BQUlBLENBQUMsS0FBSyxDQUFWLEVBQWEsT0FBT0QsQ0FBUDtBQUNiLFNBQU9ELFdBQVcsQ0FBQ0UsQ0FBRCxFQUFJRCxDQUFDLEdBQUdDLENBQVIsQ0FBbEI7QUFDRCxDQUhEOztBQUtBLE1BQU1DLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFFBQU1DLFdBQVcsR0FBRyx3QkFBcEI7QUFDQSxRQUFNQyxZQUFZLEdBQUcsd0JBQXJCO0FBQ0EsUUFBTUMsZUFBZSxHQUFJLEdBQUVGLFdBQVksSUFBR0MsWUFBYSxFQUF2RDtBQUNBLFFBQU1FLGFBQWEsR0FBR1AsV0FBVyxDQUFDSSxXQUFELEVBQWNDLFlBQWQsQ0FBakM7QUFFQSxTQUFPLENBQUNDLGVBQUQsRUFBa0JDLGFBQWxCLENBQVA7QUFDRCxDQVBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFJhbmRvbUludCBmcm9tICcuLi91dGlsaXRlcyc7XG5cbmNvbnN0IGRlc2NyaXB0aW9uR2FtZSA9ICdGaW5kIHRoZSBncmVhdGVzdCBjb21tb24gZGl2aXNvciBvZiBnaXZlbiBudW1iZXJzLic7XG5cbmNvbnN0IGFwcGx5RXVjbGlkID0gKGEsIGIpID0+IHtcbiAgaWYgKGIgPT09IDApIHJldHVybiBhO1xuICByZXR1cm4gYXBwbHlFdWNsaWQoYiwgYSAlIGIpO1xufTtcblxuY29uc3QgZ2V0UHV6emxlID0gKCkgPT4ge1xuICBjb25zdCBmaXJzdE51bWJlciA9IGdldFJhbmRvbUludCgpO1xuICBjb25zdCBzZWNvbmROdW1iZXIgPSBnZXRSYW5kb21JbnQoKTtcbiAgY29uc3QgY3VycmVudFF1ZXN0aW9uID0gYCR7Zmlyc3ROdW1iZXJ9ICR7c2Vjb25kTnVtYmVyfWA7XG4gIGNvbnN0IGN1cnJlbnRBbnN3ZXIgPSBhcHBseUV1Y2xpZChmaXJzdE51bWJlciwgc2Vjb25kTnVtYmVyKTtcblxuICByZXR1cm4gW2N1cnJlbnRRdWVzdGlvbiwgY3VycmVudEFuc3dlcl07XG59O1xuXG5leHBvcnQgeyBnZXRQdXp6bGUsIGRlc2NyaXB0aW9uR2FtZSB9O1xuIl19