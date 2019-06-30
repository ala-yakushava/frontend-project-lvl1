"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.descriptionGame = exports.getAnswer = exports.getQuestion = void 0;

var _utilites = _interopRequireDefault(require("../utilites"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const descriptionGame = 'What is the result of the expression?';
exports.descriptionGame = descriptionGame;
const operators = ['+', '-', '*'];

const getQuestion = () => `${(0, _utilites.default)()} ${operators[(0, _utilites.default)(0, operators.length)]} ${(0, _utilites.default)()}`;

exports.getQuestion = getQuestion;

const getAnswer = currentQuestion => {
  const arr = currentQuestion.split(' ');
  const firstNumber = +arr[0];
  const secondNumber = +arr[2];
  const operator = arr[1];
  let result;
  if (operator === '+') result = firstNumber + secondNumber;else if (operator === '-') result = firstNumber - secondNumber;else result = firstNumber * secondNumber;
  return `${result}`;
};

exports.getAnswer = getAnswer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9jYWxjLmpzIl0sIm5hbWVzIjpbImRlc2NyaXB0aW9uR2FtZSIsIm9wZXJhdG9ycyIsImdldFF1ZXN0aW9uIiwibGVuZ3RoIiwiZ2V0QW5zd2VyIiwiY3VycmVudFF1ZXN0aW9uIiwiYXJyIiwic3BsaXQiLCJmaXJzdE51bWJlciIsInNlY29uZE51bWJlciIsIm9wZXJhdG9yIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQSxNQUFNQSxlQUFlLEdBQUcsdUNBQXhCOztBQUNBLE1BQU1DLFNBQVMsR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFsQjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsTUFBTyxHQUFFLHdCQUFlLElBQUdELFNBQVMsQ0FBQyx1QkFBYSxDQUFiLEVBQWdCQSxTQUFTLENBQUNFLE1BQTFCLENBQUQsQ0FBb0MsSUFBRyx3QkFBZSxFQUE5Rzs7OztBQUVBLE1BQU1DLFNBQVMsR0FBSUMsZUFBRCxJQUFxQjtBQUNyQyxRQUFNQyxHQUFHLEdBQUdELGVBQWUsQ0FBQ0UsS0FBaEIsQ0FBc0IsR0FBdEIsQ0FBWjtBQUNBLFFBQU1DLFdBQVcsR0FBRyxDQUFDRixHQUFHLENBQUMsQ0FBRCxDQUF4QjtBQUNBLFFBQU1HLFlBQVksR0FBRyxDQUFDSCxHQUFHLENBQUMsQ0FBRCxDQUF6QjtBQUNBLFFBQU1JLFFBQVEsR0FBR0osR0FBRyxDQUFDLENBQUQsQ0FBcEI7QUFDQSxNQUFJSyxNQUFKO0FBRUEsTUFBSUQsUUFBUSxLQUFLLEdBQWpCLEVBQXNCQyxNQUFNLEdBQUdILFdBQVcsR0FBR0MsWUFBdkIsQ0FBdEIsS0FDSyxJQUFJQyxRQUFRLEtBQUssR0FBakIsRUFBc0JDLE1BQU0sR0FBR0gsV0FBVyxHQUFHQyxZQUF2QixDQUF0QixLQUNBRSxNQUFNLEdBQUdILFdBQVcsR0FBR0MsWUFBdkI7QUFFTCxTQUFRLEdBQUVFLE1BQU8sRUFBakI7QUFDRCxDQVpEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFJhbmRvbUludCBmcm9tICcuLi91dGlsaXRlcyc7XG5cbmNvbnN0IGRlc2NyaXB0aW9uR2FtZSA9ICdXaGF0IGlzIHRoZSByZXN1bHQgb2YgdGhlIGV4cHJlc3Npb24/JztcbmNvbnN0IG9wZXJhdG9ycyA9IFsnKycsICctJywgJyonXTtcblxuY29uc3QgZ2V0UXVlc3Rpb24gPSAoKSA9PiBgJHtnZXRSYW5kb21JbnQoKX0gJHtvcGVyYXRvcnNbZ2V0UmFuZG9tSW50KDAsIG9wZXJhdG9ycy5sZW5ndGgpXX0gJHtnZXRSYW5kb21JbnQoKX1gO1xuXG5jb25zdCBnZXRBbnN3ZXIgPSAoY3VycmVudFF1ZXN0aW9uKSA9PiB7XG4gIGNvbnN0IGFyciA9IGN1cnJlbnRRdWVzdGlvbi5zcGxpdCgnICcpO1xuICBjb25zdCBmaXJzdE51bWJlciA9ICthcnJbMF07XG4gIGNvbnN0IHNlY29uZE51bWJlciA9ICthcnJbMl07XG4gIGNvbnN0IG9wZXJhdG9yID0gYXJyWzFdO1xuICBsZXQgcmVzdWx0O1xuXG4gIGlmIChvcGVyYXRvciA9PT0gJysnKSByZXN1bHQgPSBmaXJzdE51bWJlciArIHNlY29uZE51bWJlcjtcbiAgZWxzZSBpZiAob3BlcmF0b3IgPT09ICctJykgcmVzdWx0ID0gZmlyc3ROdW1iZXIgLSBzZWNvbmROdW1iZXI7XG4gIGVsc2UgcmVzdWx0ID0gZmlyc3ROdW1iZXIgKiBzZWNvbmROdW1iZXI7XG5cbiAgcmV0dXJuIGAke3Jlc3VsdH1gO1xufTtcblxuZXhwb3J0IHsgZ2V0UXVlc3Rpb24sIGdldEFuc3dlciwgZGVzY3JpcHRpb25HYW1lIH07XG4iXX0=