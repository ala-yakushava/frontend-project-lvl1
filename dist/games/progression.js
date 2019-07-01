"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.descriptionGame = exports.getPuzzle = void 0;

var _utilites = _interopRequireDefault(require("../utilites"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const progressionLength = 10;
const descriptionGame = 'What number is missing in the progression?';
exports.descriptionGame = descriptionGame;

const getPuzzle = () => {
  const firstNumber = (0, _utilites.default)();
  const gapNumber = (0, _utilites.default)(1, 10);
  const skipIndex = (0, _utilites.default)(1, 10);
  let arr = [firstNumber];

  while (arr.length < progressionLength) {
    const nextNumber = arr[arr.length - 1] + gapNumber;
    arr = [...arr, nextNumber];
  }

  const currentAnswer = arr.splice(skipIndex, 1, '..');
  return {
    question: arr.join(' '),
    answer: currentAnswer
  };
};

exports.getPuzzle = getPuzzle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9wcm9ncmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJwcm9ncmVzc2lvbkxlbmd0aCIsImRlc2NyaXB0aW9uR2FtZSIsImdldFB1enpsZSIsImZpcnN0TnVtYmVyIiwiZ2FwTnVtYmVyIiwic2tpcEluZGV4IiwiYXJyIiwibGVuZ3RoIiwibmV4dE51bWJlciIsImN1cnJlbnRBbnN3ZXIiLCJzcGxpY2UiLCJxdWVzdGlvbiIsImpvaW4iLCJhbnN3ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLE1BQU1BLGlCQUFpQixHQUFHLEVBQTFCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLDRDQUF4Qjs7O0FBRUEsTUFBTUMsU0FBUyxHQUFHLE1BQU07QUFDdEIsUUFBTUMsV0FBVyxHQUFHLHdCQUFwQjtBQUNBLFFBQU1DLFNBQVMsR0FBRyx1QkFBYSxDQUFiLEVBQWdCLEVBQWhCLENBQWxCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLHVCQUFhLENBQWIsRUFBZ0IsRUFBaEIsQ0FBbEI7QUFDQSxNQUFJQyxHQUFHLEdBQUcsQ0FBQ0gsV0FBRCxDQUFWOztBQUVBLFNBQU9HLEdBQUcsQ0FBQ0MsTUFBSixHQUFhUCxpQkFBcEIsRUFBdUM7QUFDckMsVUFBTVEsVUFBVSxHQUFHRixHQUFHLENBQUNBLEdBQUcsQ0FBQ0MsTUFBSixHQUFhLENBQWQsQ0FBSCxHQUFzQkgsU0FBekM7QUFDQUUsSUFBQUEsR0FBRyxHQUFHLENBQUMsR0FBR0EsR0FBSixFQUFTRSxVQUFULENBQU47QUFDRDs7QUFFRCxRQUFNQyxhQUFhLEdBQUdILEdBQUcsQ0FBQ0ksTUFBSixDQUFXTCxTQUFYLEVBQXNCLENBQXRCLEVBQXlCLElBQXpCLENBQXRCO0FBRUEsU0FBTztBQUNMTSxJQUFBQSxRQUFRLEVBQUVMLEdBQUcsQ0FBQ00sSUFBSixDQUFTLEdBQVQsQ0FETDtBQUVMQyxJQUFBQSxNQUFNLEVBQUVKO0FBRkgsR0FBUDtBQUlELENBakJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFJhbmRvbUludCBmcm9tICcuLi91dGlsaXRlcyc7XG5cbmNvbnN0IHByb2dyZXNzaW9uTGVuZ3RoID0gMTA7XG5jb25zdCBkZXNjcmlwdGlvbkdhbWUgPSAnV2hhdCBudW1iZXIgaXMgbWlzc2luZyBpbiB0aGUgcHJvZ3Jlc3Npb24/JztcblxuY29uc3QgZ2V0UHV6emxlID0gKCkgPT4ge1xuICBjb25zdCBmaXJzdE51bWJlciA9IGdldFJhbmRvbUludCgpO1xuICBjb25zdCBnYXBOdW1iZXIgPSBnZXRSYW5kb21JbnQoMSwgMTApO1xuICBjb25zdCBza2lwSW5kZXggPSBnZXRSYW5kb21JbnQoMSwgMTApO1xuICBsZXQgYXJyID0gW2ZpcnN0TnVtYmVyXTtcblxuICB3aGlsZSAoYXJyLmxlbmd0aCA8IHByb2dyZXNzaW9uTGVuZ3RoKSB7XG4gICAgY29uc3QgbmV4dE51bWJlciA9IGFyclthcnIubGVuZ3RoIC0gMV0gKyBnYXBOdW1iZXI7XG4gICAgYXJyID0gWy4uLmFyciwgbmV4dE51bWJlcl07XG4gIH1cblxuICBjb25zdCBjdXJyZW50QW5zd2VyID0gYXJyLnNwbGljZShza2lwSW5kZXgsIDEsICcuLicpO1xuXG4gIHJldHVybiB7XG4gICAgcXVlc3Rpb246IGFyci5qb2luKCcgJyksXG4gICAgYW5zd2VyOiBjdXJyZW50QW5zd2VyLFxuICB9O1xufTtcblxuZXhwb3J0IHsgZ2V0UHV6emxlLCBkZXNjcmlwdGlvbkdhbWUgfTtcbiJdfQ==