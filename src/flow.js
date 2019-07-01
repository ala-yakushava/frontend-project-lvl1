import readlineSync from 'readline-sync';
import greet from '.';

const maxRepeat = 3;
const startRepeat = 0;

const playGame = (puzzle, repeat = startRepeat) => {
  const { question, answer } = puzzle();
  const currentRepeat = repeat + 1;
  console.log(`Question: ${question}`);
  const actual = readlineSync.question('Your answer: ');

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
  const playerName = greet();
  const isWinner = playGame(getPuzzle);

  if (isWinner) {
    return console.log(`Congratulations, ${playerName}!`);
  }

  return console.log(`Let's try again, ${playerName}!`);
};

export default flow;
