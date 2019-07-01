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
  const currentAnswer = calculate(firstNumber, secondNumber, operator);
  return {
    question: `${firstNumber} ${operator} ${secondNumber}`,
    answer: currentAnswer
  };
};

exports.getPuzzle = getPuzzle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9jYWxjLmpzIl0sIm5hbWVzIjpbImRlc2NyaXB0aW9uR2FtZSIsIm9wZXJhdG9ycyIsImNhbGN1bGF0ZSIsImEiLCJiIiwib3BlcmF0b3IiLCJnZXRQdXp6bGUiLCJmaXJzdE51bWJlciIsInNlY29uZE51bWJlciIsImxlbmd0aCIsImN1cnJlbnRBbnN3ZXIiLCJxdWVzdGlvbiIsImFuc3dlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsTUFBTUEsZUFBZSxHQUFHLHVDQUF4Qjs7QUFDQSxNQUFNQyxTQUFTLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBbEI7O0FBRUEsTUFBTUMsU0FBUyxHQUFHLENBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxRQUFQLEtBQW9CO0FBQ3BDLE1BQUlBLFFBQVEsS0FBSyxHQUFqQixFQUFzQixPQUFPRixDQUFDLEdBQUdDLENBQVg7QUFDdEIsTUFBSUMsUUFBUSxLQUFLLEdBQWpCLEVBQXNCLE9BQU9GLENBQUMsR0FBR0MsQ0FBWDtBQUN0QixTQUFPRCxDQUFDLEdBQUdDLENBQVg7QUFDRCxDQUpEOztBQU1BLE1BQU1FLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFFBQU1DLFdBQVcsR0FBRyx3QkFBcEI7QUFDQSxRQUFNQyxZQUFZLEdBQUcsd0JBQXJCO0FBQ0EsUUFBTUgsUUFBUSxHQUFHSixTQUFTLENBQUMsdUJBQWEsQ0FBYixFQUFnQkEsU0FBUyxDQUFDUSxNQUExQixDQUFELENBQTFCO0FBQ0EsUUFBTUMsYUFBYSxHQUFHUixTQUFTLENBQUNLLFdBQUQsRUFBY0MsWUFBZCxFQUE0QkgsUUFBNUIsQ0FBL0I7QUFFQSxTQUFPO0FBQ0xNLElBQUFBLFFBQVEsRUFBRyxHQUFFSixXQUFZLElBQUdGLFFBQVMsSUFBR0csWUFBYSxFQURoRDtBQUVMSSxJQUFBQSxNQUFNLEVBQUVGO0FBRkgsR0FBUDtBQUlELENBVkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0UmFuZG9tSW50IGZyb20gJy4uL3V0aWxpdGVzJztcblxuY29uc3QgZGVzY3JpcHRpb25HYW1lID0gJ1doYXQgaXMgdGhlIHJlc3VsdCBvZiB0aGUgZXhwcmVzc2lvbj8nO1xuY29uc3Qgb3BlcmF0b3JzID0gWycrJywgJy0nLCAnKiddO1xuXG5jb25zdCBjYWxjdWxhdGUgPSAoYSwgYiwgb3BlcmF0b3IpID0+IHtcbiAgaWYgKG9wZXJhdG9yID09PSAnKycpIHJldHVybiBhICsgYjtcbiAgaWYgKG9wZXJhdG9yID09PSAnLScpIHJldHVybiBhIC0gYjtcbiAgcmV0dXJuIGEgKiBiO1xufTtcblxuY29uc3QgZ2V0UHV6emxlID0gKCkgPT4ge1xuICBjb25zdCBmaXJzdE51bWJlciA9IGdldFJhbmRvbUludCgpO1xuICBjb25zdCBzZWNvbmROdW1iZXIgPSBnZXRSYW5kb21JbnQoKTtcbiAgY29uc3Qgb3BlcmF0b3IgPSBvcGVyYXRvcnNbZ2V0UmFuZG9tSW50KDAsIG9wZXJhdG9ycy5sZW5ndGgpXTtcbiAgY29uc3QgY3VycmVudEFuc3dlciA9IGNhbGN1bGF0ZShmaXJzdE51bWJlciwgc2Vjb25kTnVtYmVyLCBvcGVyYXRvcik7XG5cbiAgcmV0dXJuIHtcbiAgICBxdWVzdGlvbjogYCR7Zmlyc3ROdW1iZXJ9ICR7b3BlcmF0b3J9ICR7c2Vjb25kTnVtYmVyfWAsXG4gICAgYW5zd2VyOiBjdXJyZW50QW5zd2VyLFxuICB9O1xufTtcblxuZXhwb3J0IHsgZ2V0UHV6emxlLCBkZXNjcmlwdGlvbkdhbWUgfTtcbiJdfQ==