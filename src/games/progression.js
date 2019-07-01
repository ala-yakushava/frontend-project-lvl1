import getRandomInt from '../utilites';

const progressionLength = 10;
const descriptionGame = 'What number is missing in the progression?';

const getPuzzle = () => {
  const firstNumber = getRandomInt();
  const gapNumber = getRandomInt(1, 10);
  const skipIndex = getRandomInt(1, 10);
  let arr = [firstNumber];

  while (arr.length < progressionLength) {
    const nextNumber = arr[arr.length - 1] + gapNumber;
    arr = [...arr, nextNumber];
  }

  const currentAnswer = arr.splice(skipIndex, 1, '..');
  const currentQuestion = arr.join(' ');

  return [currentQuestion, currentAnswer];
};

export { getPuzzle, descriptionGame };
