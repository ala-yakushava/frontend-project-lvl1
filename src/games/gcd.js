import getRandomInt from '../utilites';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const applyEuclid = (a, b) => {
  if (b === 0) return a;
  return applyEuclid(b, a % b);
};

const getPuzzle = () => {
  const firstNumber = getRandomInt();
  const secondNumber = getRandomInt();
  const currentQuestion = `${firstNumber} ${secondNumber}`;
  const currentAnswer = applyEuclid(firstNumber, secondNumber);

  return [currentQuestion, currentAnswer];
};

export { getPuzzle, descriptionGame };
