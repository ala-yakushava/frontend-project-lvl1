"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const maxRepeat = 3;
const startRepeat = 0;

const playGame = (puzzle, repeat = startRepeat) => {
  const {
    question,
    answer
  } = puzzle();
  const currentRepeat = repeat + 1;
  console.log(`Question: ${question}`);

  const actual = _readlineSync.default.question('Your answer: ');

  if (actual !== `${answer}`) {
    console.log(`'${actual}' is wrong answer ;(. Correct answer was '${answer}'.`);
    return false;
  }

  console.log('Correct!');
  if (currentRepeat === maxRepeat) return true;
  return playGame(puzzle, currentRepeat);
};

const flow = (getPuzzle, descriptionGame) => {
  console.log(`Welcome to the Brain Games!\n${descriptionGame}\n`);
  const playerName = (0, _.default)();
  const isWinner = playGame(getPuzzle);

  if (isWinner) {
    return console.log(`Congratulations, ${playerName}!`);
  }

  return console.log(`Let's try again, ${playerName}!`);
};

var _default = flow;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mbG93LmpzIl0sIm5hbWVzIjpbIm1heFJlcGVhdCIsInN0YXJ0UmVwZWF0IiwicGxheUdhbWUiLCJwdXp6bGUiLCJyZXBlYXQiLCJxdWVzdGlvbiIsImFuc3dlciIsImN1cnJlbnRSZXBlYXQiLCJjb25zb2xlIiwibG9nIiwiYWN0dWFsIiwicmVhZGxpbmVTeW5jIiwiZmxvdyIsImdldFB1enpsZSIsImRlc2NyaXB0aW9uR2FtZSIsInBsYXllck5hbWUiLCJpc1dpbm5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLENBQWxCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLENBQXBCOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxDQUFDQyxNQUFELEVBQVNDLE1BQU0sR0FBR0gsV0FBbEIsS0FBa0M7QUFDakQsUUFBTTtBQUFFSSxJQUFBQSxRQUFGO0FBQVlDLElBQUFBO0FBQVosTUFBdUJILE1BQU0sRUFBbkM7QUFDQSxRQUFNSSxhQUFhLEdBQUdILE1BQU0sR0FBRyxDQUEvQjtBQUNBSSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxhQUFZSixRQUFTLEVBQWxDOztBQUNBLFFBQU1LLE1BQU0sR0FBR0Msc0JBQWFOLFFBQWIsQ0FBc0IsZUFBdEIsQ0FBZjs7QUFFQSxNQUFJSyxNQUFNLEtBQU0sR0FBRUosTUFBTyxFQUF6QixFQUE0QjtBQUMxQkUsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsSUFBR0MsTUFBTyw2Q0FBNENKLE1BQU8sSUFBMUU7QUFDQSxXQUFPLEtBQVA7QUFDRDs7QUFFREUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBLE1BQUlGLGFBQWEsS0FBS1AsU0FBdEIsRUFBaUMsT0FBTyxJQUFQO0FBQ2pDLFNBQU9FLFFBQVEsQ0FBQ0MsTUFBRCxFQUFTSSxhQUFULENBQWY7QUFDRCxDQWREOztBQWdCQSxNQUFNSyxJQUFJLEdBQUcsQ0FBQ0MsU0FBRCxFQUFZQyxlQUFaLEtBQWdDO0FBQzNDTixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxnQ0FBK0JLLGVBQWdCLElBQTVEO0FBQ0EsUUFBTUMsVUFBVSxHQUFHLGdCQUFuQjtBQUNBLFFBQU1DLFFBQVEsR0FBR2QsUUFBUSxDQUFDVyxTQUFELENBQXpCOztBQUVBLE1BQUlHLFFBQUosRUFBYztBQUNaLFdBQU9SLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLG9CQUFtQk0sVUFBVyxHQUEzQyxDQUFQO0FBQ0Q7O0FBRUQsU0FBT1AsT0FBTyxDQUFDQyxHQUFSLENBQWEsb0JBQW1CTSxVQUFXLEdBQTNDLENBQVA7QUFDRCxDQVZEOztlQVllSCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcbmltcG9ydCBncmVldCBmcm9tICcuJztcblxuY29uc3QgbWF4UmVwZWF0ID0gMztcbmNvbnN0IHN0YXJ0UmVwZWF0ID0gMDtcblxuY29uc3QgcGxheUdhbWUgPSAocHV6emxlLCByZXBlYXQgPSBzdGFydFJlcGVhdCkgPT4ge1xuICBjb25zdCB7IHF1ZXN0aW9uLCBhbnN3ZXIgfSA9IHB1enpsZSgpO1xuICBjb25zdCBjdXJyZW50UmVwZWF0ID0gcmVwZWF0ICsgMTtcbiAgY29uc29sZS5sb2coYFF1ZXN0aW9uOiAke3F1ZXN0aW9ufWApO1xuICBjb25zdCBhY3R1YWwgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ1lvdXIgYW5zd2VyOiAnKTtcblxuICBpZiAoYWN0dWFsICE9PSBgJHthbnN3ZXJ9YCkge1xuICAgIGNvbnNvbGUubG9nKGAnJHthY3R1YWx9JyBpcyB3cm9uZyBhbnN3ZXIgOyguIENvcnJlY3QgYW5zd2VyIHdhcyAnJHthbnN3ZXJ9Jy5gKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zb2xlLmxvZygnQ29ycmVjdCEnKTtcbiAgaWYgKGN1cnJlbnRSZXBlYXQgPT09IG1heFJlcGVhdCkgcmV0dXJuIHRydWU7XG4gIHJldHVybiBwbGF5R2FtZShwdXp6bGUsIGN1cnJlbnRSZXBlYXQpO1xufTtcblxuY29uc3QgZmxvdyA9IChnZXRQdXp6bGUsIGRlc2NyaXB0aW9uR2FtZSkgPT4ge1xuICBjb25zb2xlLmxvZyhgV2VsY29tZSB0byB0aGUgQnJhaW4gR2FtZXMhXFxuJHtkZXNjcmlwdGlvbkdhbWV9XFxuYCk7XG4gIGNvbnN0IHBsYXllck5hbWUgPSBncmVldCgpO1xuICBjb25zdCBpc1dpbm5lciA9IHBsYXlHYW1lKGdldFB1enpsZSk7XG5cbiAgaWYgKGlzV2lubmVyKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKGBDb25ncmF0dWxhdGlvbnMsICR7cGxheWVyTmFtZX0hYCk7XG4gIH1cblxuICByZXR1cm4gY29uc29sZS5sb2coYExldCdzIHRyeSBhZ2FpbiwgJHtwbGF5ZXJOYW1lfSFgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZsb3c7XG4iXX0=