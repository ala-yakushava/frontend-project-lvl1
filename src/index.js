import readlineSync from 'readline-sync';

const levelCount = 3;

const flow = (getPuzzle, descriptionGame) => {
  console.log(`Welcome to the Brain Games!\n${descriptionGame}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  const playGame = (level = 0) => {
    const [question, answer] = getPuzzle();
    const currentLevel = level + 1;
    console.log(`Question: ${question}`);
    const actual = readlineSync.question('Your answer: ');

    if (actual !== `${answer}`) {
      console.log(`'${actual}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${playerName}!`);
      return;
    }

    console.log('Correct!');

    if (currentLevel === levelCount) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }

    playGame(currentLevel);
  };

  playGame();
};

export default flow;
