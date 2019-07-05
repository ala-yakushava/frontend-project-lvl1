import readlineSync from 'readline-sync';

const startLevel = 1;
const finishLevel = 3;

const flow = (getLevelTask, descriptionGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${descriptionGame}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  const iter = (currentLevel) => {
    if (currentLevel === finishLevel) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }

    const [question, answer] = getLevelTask();
    console.log(`Question: ${question}`);
    const actual = readlineSync.question('Your answer: ');

    if (actual !== `${answer}`) {
      console.log(`'${actual}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }

    console.log('Correct!');
    iter(currentLevel + 1);
  };

  iter(startLevel);
};

export default flow;
