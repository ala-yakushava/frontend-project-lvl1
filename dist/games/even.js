"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.descriptionGame = exports.getAnswer = exports.getQuestion = void 0;

var _utilites = _interopRequireDefault(require("../utilites"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const positiveResponse = 'yes';
const negativeResponse = 'no';
const descriptionGame = `Answer "${positiveResponse}" if number even otherwise answer "${negativeResponse}".`;
exports.descriptionGame = descriptionGame;

const getQuestion = () => (0, _utilites.default)();

exports.getQuestion = getQuestion;

const getAnswer = currentQuestion => {
  const isEven = currentQuestion % 2 === 0;
  return isEven ? positiveResponse : negativeResponse;
};

exports.getAnswer = getAnswer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9ldmVuLmpzIl0sIm5hbWVzIjpbInBvc2l0aXZlUmVzcG9uc2UiLCJuZWdhdGl2ZVJlc3BvbnNlIiwiZGVzY3JpcHRpb25HYW1lIiwiZ2V0UXVlc3Rpb24iLCJnZXRBbnN3ZXIiLCJjdXJyZW50UXVlc3Rpb24iLCJpc0V2ZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLE1BQU1BLGdCQUFnQixHQUFHLEtBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsSUFBekI7QUFDQSxNQUFNQyxlQUFlLEdBQUksV0FBVUYsZ0JBQWlCLHNDQUFxQ0MsZ0JBQWlCLElBQTFHOzs7QUFFQSxNQUFNRSxXQUFXLEdBQUcsTUFBTSx3QkFBMUI7Ozs7QUFFQSxNQUFNQyxTQUFTLEdBQUlDLGVBQUQsSUFBcUI7QUFDckMsUUFBTUMsTUFBTSxHQUFHRCxlQUFlLEdBQUcsQ0FBbEIsS0FBd0IsQ0FBdkM7QUFDQSxTQUFPQyxNQUFNLEdBQUdOLGdCQUFILEdBQXNCQyxnQkFBbkM7QUFDRCxDQUhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFJhbmRvbUludCBmcm9tICcuLi91dGlsaXRlcyc7XG5cbmNvbnN0IHBvc2l0aXZlUmVzcG9uc2UgPSAneWVzJztcbmNvbnN0IG5lZ2F0aXZlUmVzcG9uc2UgPSAnbm8nO1xuY29uc3QgZGVzY3JpcHRpb25HYW1lID0gYEFuc3dlciBcIiR7cG9zaXRpdmVSZXNwb25zZX1cIiBpZiBudW1iZXIgZXZlbiBvdGhlcndpc2UgYW5zd2VyIFwiJHtuZWdhdGl2ZVJlc3BvbnNlfVwiLmA7XG5cbmNvbnN0IGdldFF1ZXN0aW9uID0gKCkgPT4gZ2V0UmFuZG9tSW50KCk7XG5cbmNvbnN0IGdldEFuc3dlciA9IChjdXJyZW50UXVlc3Rpb24pID0+IHtcbiAgY29uc3QgaXNFdmVuID0gY3VycmVudFF1ZXN0aW9uICUgMiA9PT0gMDtcbiAgcmV0dXJuIGlzRXZlbiA/IHBvc2l0aXZlUmVzcG9uc2UgOiBuZWdhdGl2ZVJlc3BvbnNlO1xufTtcblxuZXhwb3J0IHsgZ2V0UXVlc3Rpb24sIGdldEFuc3dlciwgZGVzY3JpcHRpb25HYW1lIH07XG4iXX0=