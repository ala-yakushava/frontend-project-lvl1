import readlineSync from 'readline-sync';

const repeatsCount = 3;

const playGame = (puzzle, repeat = 0) => {
  const [question, answer] = puzzle();
  const currentRepeat = repeat + 1;
  console.log(`Question: ${question}`);
  const actual = readlineSync.question('Your answer: ');

  if (actual !== `${answer}`) {
    console.log(`'${actual}' is wrong answer ;(. Correct answer was '${answer}'.`);
    return false;
  }

  console.log('Correct!');
  if (currentRepeat === repeatsCount) return true;
  return playGame(puzzle, currentRepeat);
};

export default (getPuzzle, descriptionGame) => {
  console.log(`Welcome to the Brain Games!\n${descriptionGame}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  const isWinner = playGame(getPuzzle);

  if (isWinner) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};
