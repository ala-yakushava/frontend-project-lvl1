import getRandomInt from '../utilites';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const getQuestion = () => `${getRandomInt()} ${getRandomInt()}`;

const getAnswer = (currentQuestion) => {
  const arr = currentQuestion.split(' ');
  const firstNumber = +arr[0];
  const secondNumber = +arr[1];

  const maxDividor = firstNumber < secondNumber ? firstNumber : secondNumber;

  for (let i = maxDividor; i > 0; i -= 1) {
    const isDividor = firstNumber % i === 0 && secondNumber % i === 0;
    if (isDividor) return `${i}`;
  }

  return null;
};

export { getQuestion, getAnswer, descriptionGame };
