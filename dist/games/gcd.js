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
  const currentAnswer = applyEuclid(firstNumber, secondNumber);
  return {
    question: `${firstNumber} ${secondNumber}`,
    answer: currentAnswer
  };
};

exports.getPuzzle = getPuzzle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9nY2QuanMiXSwibmFtZXMiOlsiZGVzY3JpcHRpb25HYW1lIiwiYXBwbHlFdWNsaWQiLCJhIiwiYiIsImdldFB1enpsZSIsImZpcnN0TnVtYmVyIiwic2Vjb25kTnVtYmVyIiwiY3VycmVudEFuc3dlciIsInF1ZXN0aW9uIiwiYW5zd2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQSxNQUFNQSxlQUFlLEdBQUcsb0RBQXhCOzs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVU7QUFDNUIsTUFBSUEsQ0FBQyxLQUFLLENBQVYsRUFBYSxPQUFPRCxDQUFQO0FBQ2IsU0FBT0QsV0FBVyxDQUFDRSxDQUFELEVBQUlELENBQUMsR0FBR0MsQ0FBUixDQUFsQjtBQUNELENBSEQ7O0FBS0EsTUFBTUMsU0FBUyxHQUFHLE1BQU07QUFDdEIsUUFBTUMsV0FBVyxHQUFHLHdCQUFwQjtBQUNBLFFBQU1DLFlBQVksR0FBRyx3QkFBckI7QUFDQSxRQUFNQyxhQUFhLEdBQUdOLFdBQVcsQ0FBQ0ksV0FBRCxFQUFjQyxZQUFkLENBQWpDO0FBRUEsU0FBTztBQUNMRSxJQUFBQSxRQUFRLEVBQUcsR0FBRUgsV0FBWSxJQUFHQyxZQUFhLEVBRHBDO0FBRUxHLElBQUFBLE1BQU0sRUFBRUY7QUFGSCxHQUFQO0FBSUQsQ0FURCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRSYW5kb21JbnQgZnJvbSAnLi4vdXRpbGl0ZXMnO1xuXG5jb25zdCBkZXNjcmlwdGlvbkdhbWUgPSAnRmluZCB0aGUgZ3JlYXRlc3QgY29tbW9uIGRpdmlzb3Igb2YgZ2l2ZW4gbnVtYmVycy4nO1xuXG5jb25zdCBhcHBseUV1Y2xpZCA9IChhLCBiKSA9PiB7XG4gIGlmIChiID09PSAwKSByZXR1cm4gYTtcbiAgcmV0dXJuIGFwcGx5RXVjbGlkKGIsIGEgJSBiKTtcbn07XG5cbmNvbnN0IGdldFB1enpsZSA9ICgpID0+IHtcbiAgY29uc3QgZmlyc3ROdW1iZXIgPSBnZXRSYW5kb21JbnQoKTtcbiAgY29uc3Qgc2Vjb25kTnVtYmVyID0gZ2V0UmFuZG9tSW50KCk7XG4gIGNvbnN0IGN1cnJlbnRBbnN3ZXIgPSBhcHBseUV1Y2xpZChmaXJzdE51bWJlciwgc2Vjb25kTnVtYmVyKTtcblxuICByZXR1cm4ge1xuICAgIHF1ZXN0aW9uOiBgJHtmaXJzdE51bWJlcn0gJHtzZWNvbmROdW1iZXJ9YCxcbiAgICBhbnN3ZXI6IGN1cnJlbnRBbnN3ZXIsXG4gIH07XG59O1xuXG5leHBvcnQgeyBnZXRQdXp6bGUsIGRlc2NyaXB0aW9uR2FtZSB9O1xuIl19