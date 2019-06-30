"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.descriptionGame = exports.getAnswer = exports.getQuestion = void 0;

var _utilites = _interopRequireDefault(require("../utilites"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const descriptionGame = 'Find the greatest common divisor of given numbers.';
exports.descriptionGame = descriptionGame;

const getQuestion = () => `${(0, _utilites.default)()} ${(0, _utilites.default)()}`;

exports.getQuestion = getQuestion;

const getAnswer = currentQuestion => {
  const arr = currentQuestion.split(' ');
  const firstNumber = +arr[0];
  const secondNumber = +arr[1];
  const maxDividor = firstNumber < secondNumber ? firstNumber : secondNumber;

  for (let i = maxDividor; i > 0; i -= 1) {
    const isDividor = firstNumber % i === 0 && secondNumber % i === 0;
    if (isDividor) return `${i}`;
  }

  return null;
};

exports.getAnswer = getAnswer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9nY2QuanMiXSwibmFtZXMiOlsiZGVzY3JpcHRpb25HYW1lIiwiZ2V0UXVlc3Rpb24iLCJnZXRBbnN3ZXIiLCJjdXJyZW50UXVlc3Rpb24iLCJhcnIiLCJzcGxpdCIsImZpcnN0TnVtYmVyIiwic2Vjb25kTnVtYmVyIiwibWF4RGl2aWRvciIsImkiLCJpc0Rpdmlkb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLE1BQU1BLGVBQWUsR0FBRyxvREFBeEI7OztBQUVBLE1BQU1DLFdBQVcsR0FBRyxNQUFPLEdBQUUsd0JBQWUsSUFBRyx3QkFBZSxFQUE5RDs7OztBQUVBLE1BQU1DLFNBQVMsR0FBSUMsZUFBRCxJQUFxQjtBQUNyQyxRQUFNQyxHQUFHLEdBQUdELGVBQWUsQ0FBQ0UsS0FBaEIsQ0FBc0IsR0FBdEIsQ0FBWjtBQUNBLFFBQU1DLFdBQVcsR0FBRyxDQUFDRixHQUFHLENBQUMsQ0FBRCxDQUF4QjtBQUNBLFFBQU1HLFlBQVksR0FBRyxDQUFDSCxHQUFHLENBQUMsQ0FBRCxDQUF6QjtBQUVBLFFBQU1JLFVBQVUsR0FBR0YsV0FBVyxHQUFHQyxZQUFkLEdBQTZCRCxXQUE3QixHQUEyQ0MsWUFBOUQ7O0FBRUEsT0FBSyxJQUFJRSxDQUFDLEdBQUdELFVBQWIsRUFBeUJDLENBQUMsR0FBRyxDQUE3QixFQUFnQ0EsQ0FBQyxJQUFJLENBQXJDLEVBQXdDO0FBQ3RDLFVBQU1DLFNBQVMsR0FBR0osV0FBVyxHQUFHRyxDQUFkLEtBQW9CLENBQXBCLElBQXlCRixZQUFZLEdBQUdFLENBQWYsS0FBcUIsQ0FBaEU7QUFDQSxRQUFJQyxTQUFKLEVBQWUsT0FBUSxHQUFFRCxDQUFFLEVBQVo7QUFDaEI7O0FBRUQsU0FBTyxJQUFQO0FBQ0QsQ0FiRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRSYW5kb21JbnQgZnJvbSAnLi4vdXRpbGl0ZXMnO1xuXG5jb25zdCBkZXNjcmlwdGlvbkdhbWUgPSAnRmluZCB0aGUgZ3JlYXRlc3QgY29tbW9uIGRpdmlzb3Igb2YgZ2l2ZW4gbnVtYmVycy4nO1xuXG5jb25zdCBnZXRRdWVzdGlvbiA9ICgpID0+IGAke2dldFJhbmRvbUludCgpfSAke2dldFJhbmRvbUludCgpfWA7XG5cbmNvbnN0IGdldEFuc3dlciA9IChjdXJyZW50UXVlc3Rpb24pID0+IHtcbiAgY29uc3QgYXJyID0gY3VycmVudFF1ZXN0aW9uLnNwbGl0KCcgJyk7XG4gIGNvbnN0IGZpcnN0TnVtYmVyID0gK2FyclswXTtcbiAgY29uc3Qgc2Vjb25kTnVtYmVyID0gK2FyclsxXTtcblxuICBjb25zdCBtYXhEaXZpZG9yID0gZmlyc3ROdW1iZXIgPCBzZWNvbmROdW1iZXIgPyBmaXJzdE51bWJlciA6IHNlY29uZE51bWJlcjtcblxuICBmb3IgKGxldCBpID0gbWF4RGl2aWRvcjsgaSA+IDA7IGkgLT0gMSkge1xuICAgIGNvbnN0IGlzRGl2aWRvciA9IGZpcnN0TnVtYmVyICUgaSA9PT0gMCAmJiBzZWNvbmROdW1iZXIgJSBpID09PSAwO1xuICAgIGlmIChpc0Rpdmlkb3IpIHJldHVybiBgJHtpfWA7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCB7IGdldFF1ZXN0aW9uLCBnZXRBbnN3ZXIsIGRlc2NyaXB0aW9uR2FtZSB9O1xuIl19