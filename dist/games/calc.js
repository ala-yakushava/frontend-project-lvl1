"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.descriptionGame = exports.getPuzzle = void 0;

var _utilites = _interopRequireDefault(require("../utilites"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const descriptionGame = 'What is the result of the expression?';
exports.descriptionGame = descriptionGame;
const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  if (operator === '+') return a + b;
  if (operator === '-') return a - b;
  return a * b;
};

const getPuzzle = () => {
  const firstNumber = (0, _utilites.default)();
  const secondNumber = (0, _utilites.default)();
  const operator = operators[(0, _utilites.default)(0, operators.length)];
  const currentQuestion = `${firstNumber} ${operator} ${secondNumber}`;
  const currentAnswer = calculate(firstNumber, secondNumber, operator);
  return [currentQuestion, currentAnswer];
};

exports.getPuzzle = getPuzzle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9jYWxjLmpzIl0sIm5hbWVzIjpbImRlc2NyaXB0aW9uR2FtZSIsIm9wZXJhdG9ycyIsImNhbGN1bGF0ZSIsImEiLCJiIiwib3BlcmF0b3IiLCJnZXRQdXp6bGUiLCJmaXJzdE51bWJlciIsInNlY29uZE51bWJlciIsImxlbmd0aCIsImN1cnJlbnRRdWVzdGlvbiIsImN1cnJlbnRBbnN3ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLE1BQU1BLGVBQWUsR0FBRyx1Q0FBeEI7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQWxCOztBQUVBLE1BQU1DLFNBQVMsR0FBRyxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0MsUUFBUCxLQUFvQjtBQUNwQyxNQUFJQSxRQUFRLEtBQUssR0FBakIsRUFBc0IsT0FBT0YsQ0FBQyxHQUFHQyxDQUFYO0FBQ3RCLE1BQUlDLFFBQVEsS0FBSyxHQUFqQixFQUFzQixPQUFPRixDQUFDLEdBQUdDLENBQVg7QUFDdEIsU0FBT0QsQ0FBQyxHQUFHQyxDQUFYO0FBQ0QsQ0FKRDs7QUFNQSxNQUFNRSxTQUFTLEdBQUcsTUFBTTtBQUN0QixRQUFNQyxXQUFXLEdBQUcsd0JBQXBCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLHdCQUFyQjtBQUNBLFFBQU1ILFFBQVEsR0FBR0osU0FBUyxDQUFDLHVCQUFhLENBQWIsRUFBZ0JBLFNBQVMsQ0FBQ1EsTUFBMUIsQ0FBRCxDQUExQjtBQUNBLFFBQU1DLGVBQWUsR0FBSSxHQUFFSCxXQUFZLElBQUdGLFFBQVMsSUFBR0csWUFBYSxFQUFuRTtBQUNBLFFBQU1HLGFBQWEsR0FBR1QsU0FBUyxDQUFDSyxXQUFELEVBQWNDLFlBQWQsRUFBNEJILFFBQTVCLENBQS9CO0FBRUEsU0FBTyxDQUFDSyxlQUFELEVBQWtCQyxhQUFsQixDQUFQO0FBQ0QsQ0FSRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRSYW5kb21JbnQgZnJvbSAnLi4vdXRpbGl0ZXMnO1xuXG5jb25zdCBkZXNjcmlwdGlvbkdhbWUgPSAnV2hhdCBpcyB0aGUgcmVzdWx0IG9mIHRoZSBleHByZXNzaW9uPyc7XG5jb25zdCBvcGVyYXRvcnMgPSBbJysnLCAnLScsICcqJ107XG5cbmNvbnN0IGNhbGN1bGF0ZSA9IChhLCBiLCBvcGVyYXRvcikgPT4ge1xuICBpZiAob3BlcmF0b3IgPT09ICcrJykgcmV0dXJuIGEgKyBiO1xuICBpZiAob3BlcmF0b3IgPT09ICctJykgcmV0dXJuIGEgLSBiO1xuICByZXR1cm4gYSAqIGI7XG59O1xuXG5jb25zdCBnZXRQdXp6bGUgPSAoKSA9PiB7XG4gIGNvbnN0IGZpcnN0TnVtYmVyID0gZ2V0UmFuZG9tSW50KCk7XG4gIGNvbnN0IHNlY29uZE51bWJlciA9IGdldFJhbmRvbUludCgpO1xuICBjb25zdCBvcGVyYXRvciA9IG9wZXJhdG9yc1tnZXRSYW5kb21JbnQoMCwgb3BlcmF0b3JzLmxlbmd0aCldO1xuICBjb25zdCBjdXJyZW50UXVlc3Rpb24gPSBgJHtmaXJzdE51bWJlcn0gJHtvcGVyYXRvcn0gJHtzZWNvbmROdW1iZXJ9YDtcbiAgY29uc3QgY3VycmVudEFuc3dlciA9IGNhbGN1bGF0ZShmaXJzdE51bWJlciwgc2Vjb25kTnVtYmVyLCBvcGVyYXRvcik7XG5cbiAgcmV0dXJuIFtjdXJyZW50UXVlc3Rpb24sIGN1cnJlbnRBbnN3ZXJdO1xufTtcblxuZXhwb3J0IHsgZ2V0UHV6emxlLCBkZXNjcmlwdGlvbkdhbWUgfTtcbiJdfQ==