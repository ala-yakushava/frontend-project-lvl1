import getRandomInt from '../utilites';

const positiveResponse = 'yes';
const negativeResponse = 'no';
const descriptionGame = `Answer "${positiveResponse}" if given number is prime. Otherwise answer "${negativeResponse}".`;

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const getPuzzle = () => {
  const currentQuestion = getRandomInt(2, 100);
  const currentAnswer = isPrime(currentQuestion) ? positiveResponse : negativeResponse;

  return [currentQuestion, currentAnswer];
};

export { getPuzzle, descriptionGame };
